import jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import { log } from 'console';

export const authMiddleware = (req: any, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1] || req?.body?.token; // Assuming Bearer token
  if (!token) return res.status(401).json({ message: 'Token required' });

  try {
    const decoded = jwt.verify(token, 'your-jwt-secret');
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};
