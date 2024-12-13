import { Request, Response } from 'express';
import {
  readUsersAnalyticsData,
  readAllUsers,
  readUserById,
  updateUserData,
  deleteUserData,
} from '../services/user';
import { log } from 'console';

// Function to get analytics record
export const getUserAnalytics = async (req: Request, res: Response) => {
  try {
    const analytics = await readUsersAnalyticsData();
    res.status(200).json(analytics);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching analytics', error });
  }
};

// Function to get all users data
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await readAllUsers(req, res);
    if (users.length === 0) {
      return res.status(404).json({ message: 'No users found' });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users', error });
  }
};

// Function to get a single user by ID
export const getUserById = async (req: Request, res: Response) => {
  let { id } = req.params;
  try {
    const user = await readUserById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error });
  }
};

// Function to update a user by ID
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const updatedUser = await updateUserData(id, { name, email });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
};

// Function to delete a user by ID
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedUser = await deleteUserData(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
};
