import db from '../../database/connection';

export const readUsersAnalyticsData = async () => {
  // Example query to fetch user data (change this to fit your DB schema)
  const totalUser = await db('users').count('* as users');
  const adminCount = await db('users')
    .where('type', 'admin')
    .count('* as admins');

  const userCount = Number(totalUser[0]?.users - adminCount[0]?.admins);

  return {
    total: totalUser[0]?.users,
    admin: adminCount[0]?.admins,
    user: userCount,
  };
};

export const readAllUsers = async (req: any, res: any) => {
  try {
    // Fetch all users from the 'users' table
    const users = await db('users').select(
      'id',
      'name',
      'email',
      'type',
      'created_at',
      'updated_at'
    );

    return users;
  } catch (error) {
    throw new Error('Error fetching user by ID');
  }
};

// Function to read a single user by ID
export const readUserById = async (id: string) => {
  try {
    // Fetch user by ID from the 'users' table
    const user = await db('users')
      .select('id', 'name', 'email', 'type', 'created_at', 'updated_at')
      .where('id', id)
      .first();

    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw new Error('Error fetching user by ID');
  }
};

// Function to update a user by ID
export const updateUserData = async (
  id: string,
  updatedData: { name: string; email: string; type: string }
) => {
  try {
    const updatedUser = await db('users')
      .where('id', id)
      .update({
        name: updatedData.name,
        email: updatedData.email,
        type: updatedData.type || 'user',
        updated_at: db.fn.now(),
      })
      .returning(['id', 'name', 'email', 'type', 'created_at', 'updated_at']);

    if (updatedUser.length === 0) {
      throw new Error('User not found');
    }
    return updatedUser;
  } catch (error) {
    throw new Error('Error updating user');
  }
};

// Function to delete a user by ID
export const deleteUserData = async (id: string) => {
  try {
    const deletedUser = await db('users').where('id', id).del().returning('id');

    if (deletedUser.length === 0) {
      throw new Error('User not found');
    }
    return deletedUser[0];
  } catch (error) {
    throw new Error('Error deleting user');
  }
};
