import sql from "@/app/api/utils/sql";

export async function POST(request) {
  try {
    const body = await request.json();

    // Extract client information
    const clientIP =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";

    // Validate required fields
    const { name, email, hospital, phone, message } = body;

    if (!name || !email || !hospital) {
      return Response.json(
        { error: "Name, email, and hospital are required fields" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Please provide a valid email address" },
        { status: 400 },
      );
    }

    // Validate name length
    if (name.length < 2 || name.length > 255) {
      return Response.json(
        { error: "Name must be between 2 and 255 characters" },
        { status: 400 },
      );
    }

    // Validate hospital length
    if (hospital.length < 2 || hospital.length > 255) {
      return Response.json(
        { error: "Hospital name must be between 2 and 255 characters" },
        { status: 400 },
      );
    }

    // Validate phone if provided
    if (phone && phone.length > 50) {
      return Response.json(
        { error: "Phone number must be less than 50 characters" },
        { status: 400 },
      );
    }

    // Check for duplicate submissions (same email within last 5 minutes)
    const recentSubmission = await sql`
      SELECT id FROM demo_requests 
      WHERE email = ${email} 
      AND created_at > NOW() - INTERVAL '5 minutes'
      LIMIT 1
    `;

    if (recentSubmission.length > 0) {
      return Response.json(
        {
          error:
            "A demo request from this email was already submitted recently. Please wait 5 minutes before submitting again.",
          code: "DUPLICATE_SUBMISSION",
        },
        { status: 429 },
      );
    }

    // Insert into database
    const result = await sql`
      INSERT INTO demo_requests (
        name, email, hospital, phone, message, ip_address, user_agent
      ) VALUES (
        ${name}, ${email}, ${hospital}, ${phone || null}, ${message || null}, 
        ${clientIP}, ${userAgent}
      )
      RETURNING id, name, email, hospital, created_at
    `;

    const newRequest = result[0];

    // Send admin notification email
    try {
      await sendAdminNotification({
        id: newRequest.id,
        name,
        email,
        hospital,
        phone,
        message,
        submittedAt: newRequest.created_at,
        clientIP,
        userAgent,
      });
    } catch (emailError) {
      console.error("Failed to send admin notification:", emailError);
      // Don't fail the request if email fails
    }

    // Log successful submission
    console.log("Demo request submitted successfully:", {
      id: newRequest.id,
      name,
      email,
      hospital,
      timestamp: newRequest.created_at,
      source: "landing-page",
    });

    return Response.json(
      {
        success: true,
        message:
          "Demo request submitted successfully! Our team will contact you within 24 hours.",
        data: {
          id: newRequest.id,
          name: newRequest.name,
          email: newRequest.email,
          hospital: newRequest.hospital,
          status: "pending",
          submittedAt: newRequest.created_at,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error processing demo request:", error);

    // Handle specific database errors
    if (error.message.includes("unique constraint")) {
      return Response.json(
        { error: "A request with this information already exists" },
        { status: 409 },
      );
    }

    return Response.json(
      {
        error:
          "An error occurred while processing your request. Please try again or contact support.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
        code: "INTERNAL_ERROR",
      },
      { status: 500 },
    );
  }
}

// Get demo requests (admin endpoint)
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = Math.min(parseInt(searchParams.get("limit")) || 20, 100);
    const status = searchParams.get("status");
    const search = searchParams.get("search");

    const offset = (page - 1) * limit;

    let whereCondition = "WHERE 1=1";
    const params = [];
    let paramCount = 0;

    if (status) {
      paramCount++;
      whereCondition += ` AND status = $${paramCount}`;
      params.push(status);
    }

    if (search) {
      paramCount++;
      whereCondition += ` AND (
        LOWER(name) LIKE LOWER($${paramCount}) OR 
        LOWER(email) LIKE LOWER($${paramCount}) OR 
        LOWER(hospital) LIKE LOWER($${paramCount})
      )`;
      params.push(`%${search}%`);
    }

    // Get total count
    const countResult = await sql(
      `
      SELECT COUNT(*) as total FROM demo_requests ${whereCondition}
    `,
      params,
    );

    const total = parseInt(countResult[0].total);

    // Get paginated results
    const requests = await sql(
      `
      SELECT 
        id, name, email, hospital, phone, message, status, 
        created_at, updated_at, ip_address, notes
      FROM demo_requests 
      ${whereCondition}
      ORDER BY created_at DESC 
      LIMIT $${paramCount + 1} OFFSET $${paramCount + 2}
    `,
      [...params, limit, offset],
    );

    return Response.json({
      success: true,
      data: requests,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching demo requests:", error);
    return Response.json(
      { error: "Failed to fetch demo requests" },
      { status: 500 },
    );
  }
}

// Helper function to send admin notification email
async function sendAdminNotification(requestData) {
  const adminEmail = process.env.ADMIN_EMAIL || "admin@medicore.com";
  const fromEmail = process.env.FROM_EMAIL || "noreply@medicore.com";

  // Email content
  const emailSubject = `🏥 New MediCore Demo Request from ${requestData.hospital}`;
  const emailBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #0EA5E9, #0284C7); padding: 20px; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0; text-align: center;">🏥 New Demo Request</h1>
      </div>
      
      <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px;">
        <h2 style="color: #0f172a; margin-bottom: 20px;">Request Details</h2>
        
        <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <p><strong>👤 Name:</strong> ${requestData.name}</p>
          <p><strong>📧 Email:</strong> <a href="mailto:${requestData.email}">${requestData.email}</a></p>
          <p><strong>🏥 Hospital:</strong> ${requestData.hospital}</p>
          <p><strong>📱 Phone:</strong> ${requestData.phone || "Not provided"}</p>
          <p><strong>📝 Message:</strong><br>${requestData.message || "No message provided"}</p>
        </div>
        
        <div style="background: #e0f2fe; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
          <p style="margin: 0;"><strong>🕐 Submitted:</strong> ${new Date(requestData.submittedAt).toLocaleString()}</p>
          <p style="margin: 5px 0 0 0;"><strong>🔗 Request ID:</strong> #${requestData.id}</p>
        </div>
        
        <div style="text-align: center; margin-top: 30px;">
          <a href="mailto:${requestData.email}?subject=Re: MediCore Demo Request" 
             style="background: #0284c7; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
            📧 Reply to ${requestData.name}
          </a>
        </div>
      </div>
    </div>
  `;

  // In a production environment, you would use a service like:
  // - SendGrid, Mailgun, AWS SES, or similar
  // For now, we'll log the email content

  console.log("=== ADMIN NOTIFICATION EMAIL ===");
  console.log("To:", adminEmail);
  console.log("From:", fromEmail);
  console.log("Subject:", emailSubject);
  console.log("Body:", emailBody);
  console.log("==============================");

  // TODO: Integrate with actual email service
  // Example with a hypothetical email service:
  /*
  const emailService = new EmailService(process.env.EMAIL_API_KEY);
  await emailService.send({
    to: adminEmail,
    from: fromEmail,
    subject: emailSubject,
    html: emailBody
  });
  */

  return true;
}
