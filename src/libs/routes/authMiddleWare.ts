import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import hasPermission from "./../../../extraTs/utils/permissions";
import { validateToken } from 'jsonwebtoken';

/**
 * middleware to check whether user has access to a specific endpoint
 *
 * @param allowedAccessTypes list of allowed access types of a specific endpoint
 */

const authMiddleWare = (moduleName: string, permissionType: string) => async (req: Request, res: Response, next: NextFunction) => {
  const key = process.env.JWT_SECRET;

  try {
    let token = req.headers.authorization;
    let role = req.body.role;

    console.log("IN#")

    // verify request has token
    if (!token) {
      return res.status(401).json({ message: 'Invalid token ' });
    }

    // remove Bearer if using Bearer Authorization mechanism
    if (token.toLowerCase().startsWith('bearer')) {
      token = token.slice('bearer'.length).trim();
    }

        // verify token hasn't expired yet
        const decodedToken = await validateToken(jwt);

    jwt.verify(token, key, (err: AnalyserNode, user: any) => {
      if(err){
        return res
          .status(403)
          .send({success: false, message: "Unauthorized Access"})
      }
      next();
    })

    hasPermission(moduleName, role, permissionType);
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      res.status(401).json({ message: 'Expired token' });
      return;
    }

    res.status(500).json({ message: 'Failed to authenticate user' });
  }
};

export default authMiddleWare;
