import { Request, Response } from 'express';
import { readUsersAnalyticsData, readAllUsers } from '../services/user';

// function to get analytics record
export const getUserAnalytics = async (req: Request, res: Response) => {
  try {
    const analytics = await readUsersAnalyticsData();
    res.status(200).json(analytics);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching analytics', error });
  }
};

// Function to get users data
export const getUsers = async (req: Request, res: Response) => {
  try {
    const analytics = await readAllUsers(req, res);
    res.status(200).json(analytics);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching analytics', error });
  }
};
