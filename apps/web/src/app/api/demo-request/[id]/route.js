import sql from "@/app/api/utils/sql";

// Get single demo request
export async function GET(request, { params }) {
  try {
    const { id } = params;

    if (!id || isNaN(parseInt(id))) {
      return Response.json(
        { error: "Valid request ID is required" },
        { status: 400 }
      );
    }

    const result = await sql`
      SELECT 
        id, name, email, hospital, phone, message, status, 
        created_at, updated_at, ip_address, user_agent
      FROM demo_requests 
      WHERE id = ${parseInt(id)}
      LIMIT 1
    `;

    if (result.length === 0) {
      return Response.json(
        { error: "Demo request not found" },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      data: result[0]
    });

  } catch (error) {
    console.error("Error fetching demo request:", error);
    return Response.json(
      { error: "Failed to fetch demo request" },
      { status: 500 }
    );
  }
}

// Update demo request status
export async function PATCH(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    const { status, notes } = body;

    if (!id || isNaN(parseInt(id))) {
      return Response.json(
        { error: "Valid request ID is required" },
        { status: 400 }
      );
    }

    // Validate status
    const validStatuses = ['pending', 'contacted', 'demo_scheduled', 'completed', 'rejected'];
    if (status && !validStatuses.includes(status)) {
      return Response.json(
        { error: "Invalid status. Must be one of: " + validStatuses.join(', ') },
        { status: 400 }
      );
    }

    // Check if request exists
    const existingRequest = await sql`
      SELECT id, status FROM demo_requests WHERE id = ${parseInt(id)} LIMIT 1
    `;

    if (existingRequest.length === 0) {
      return Response.json(
        { error: "Demo request not found" },
        { status: 404 }
      );
    }

    // Build dynamic update query
    const updates = [];
    const values = [];
    let paramCount = 0;

    if (status) {
      paramCount++;
      updates.push(`status = $${paramCount}`);
      values.push(status);
    }

    if (notes !== undefined) {
      paramCount++;
      updates.push(`notes = $${paramCount}`);
      values.push(notes);
    }

    // Always update the timestamp
    paramCount++;
    updates.push(`updated_at = NOW()`);

    if (updates.length === 1) { // Only the timestamp update
      return Response.json(
        { error: "No valid fields to update" },
        { status: 400 }
      );
    }

    // Add the ID parameter for WHERE clause
    paramCount++;
    values.push(parseInt(id));

    // Execute update
    const result = await sql(
      `UPDATE demo_requests 
       SET ${updates.join(', ')} 
       WHERE id = $${paramCount} 
       RETURNING id, name, email, hospital, phone, status, created_at, updated_at`,
      values
    );

    // Log the status change
    if (status && status !== existingRequest[0].status) {
      console.log(`Demo request #${id} status changed from '${existingRequest[0].status}' to '${status}'`);
    }

    return Response.json({
      success: true,
      message: "Demo request updated successfully",
      data: result[0]
    });

  } catch (error) {
    console.error("Error updating demo request:", error);
    return Response.json(
      { error: "Failed to update demo request" },
      { status: 500 }
    );
  }
}

// Delete demo request (admin only)
export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    if (!id || isNaN(parseInt(id))) {
      return Response.json(
        { error: "Valid request ID is required" },
        { status: 400 }
      );
    }

    // Check if request exists
    const existingRequest = await sql`
      SELECT id, name, email FROM demo_requests WHERE id = ${parseInt(id)} LIMIT 1
    `;

    if (existingRequest.length === 0) {
      return Response.json(
        { error: "Demo request not found" },
        { status: 404 }
      );
    }

    // Delete the request
    await sql`DELETE FROM demo_requests WHERE id = ${parseInt(id)}`;

    // Log the deletion
    console.log(`Demo request #${id} deleted - was from ${existingRequest[0].name} (${existingRequest[0].email})`);

    return Response.json({
      success: true,
      message: "Demo request deleted successfully"
    });

  } catch (error) {
    console.error("Error deleting demo request:", error);
    return Response.json(
      { error: "Failed to delete demo request" },
      { status: 500 }
    );
  }
}