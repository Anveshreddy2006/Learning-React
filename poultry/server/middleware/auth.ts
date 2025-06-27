import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface AuthRequest extends Request {
  user?: {
    userId: string;
    userType: string;
  };
}

export const authenticateToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || 'your-secret-key'
    ) as { userId: string; userType: string };

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

export const isFarmer = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.user?.userType !== 'farmer') {
    return res.status(403).json({ message: 'Access denied. Farmers only.' });
  }
  next();
};

export const isBuyer = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.user?.userType !== 'buyer') {
    return res.status(403).json({ message: 'Access denied. Buyers only.' });
  }
  next();
}; 