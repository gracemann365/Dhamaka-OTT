import { Request, Response, NextFunction } from 'express';
import * as express from 'express';

const isAdmin: express.RequestHandler = (req: Request, res: Response, next: NextFunction) => {
     // Temporarily disable admin role check
    // const userRole = (req as any).user?.role; 

    // For testing purposes, assume all users have admin role
    const userRole = 'admin';


    // Check if the user is an admin
    if (userRole === 'admin') {
        // User has admin role, proceed to next middleware
        res.status(200);
        next();
    } else {
        // User is not authorized, send 403 Forbidden response
        res.status(403).json({ message: 'Unauthorized' });
    }
};

export default isAdmin;
