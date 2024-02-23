export async function GET(){
    const userData ={
        id: 1,
        firstName: 'John',
        lastName:'Doe',
        email:'john@example.com',
    };
    const statusCode = 200; 
    return Response.json({data: userData}, {status: statusCode});
}

export async function PUT(request) {
    try {
      const { firstName,lastName, email } = await request.json();
      // Add your logic to update the user or perform any other necessary operations
      // For example, you can update the user in a database
      const updatedUser = {
        firstName,
        lastName,
        email,
      };
      // Return the updated user as a response
      return NextResponse.json({ user: updatedUser });
    } catch (error) {
      // Handle any error that may occur during the process
      console.error(error);
      // Return an appropriate error response
      return NextResponse.error({ message: 'Failed to update user' });
    }
  }

export async function POST(request) {
try {
    const { firstName, lastName, email } = await request.json();
    // Add your logic to create a new user or perform any other necessary operations
    // For example, you can save the new user to a database
    const newUser = {
    id: 2, // Assign a unique ID to the new user
    firstName,
    lastName,
    email,
    };
    // Return the newly created user as a response
    return NextResponse.json({ user: newUser });
} catch (error) {
    // Handle any error that may occur during the process
    console.error(error);
    // Return an appropriate error response
    return NextResponse.error({ message: 'Failed to create user' });
}
}


export async function DELETE(request) {
    try {
      const { id } = await request.json();
      // Add your logic to delete the user or perform any other necessary operations
      // For example, you can delete the user from a database
      const deletedUser = {
        id,
        message: 'User successfully deleted',
      };
      // Return the deleted user as a response
      return NextResponse.json({ user: deletedUser });
    } catch (error) {
      // Handle any error that may occur during the process
      console.error(error);
      // Return an appropriate error response
      return NextResponse.error({ message: 'Failed to delete user' });
    }
  }