import db from '../../database/connection';

export const readUsersAnalyticsData = async () => {
  // Example query to fetch user data (change this to fit your DB schema)
  const result = await db('users').count('* as total_users');
  return result[0];
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

    if (users.length === 0) {
      return res.status(404).json({ message: 'No users found' });
    }

    // Return users in the response
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch users' });
  }
};
