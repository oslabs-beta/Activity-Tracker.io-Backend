import { Request, Response, NextFunction } from "express";
import createCognitoVerifier from "./verifier";
import jwt from "jsonwebtoken";

const verifier = createCognitoVerifier();

const auth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).send("Unauthorized: No token provided");
  }

  try {
    let payload:any;
    const decoded = jwt.decode(token, { complete: true }) as any;

    if (decoded && decoded.payload.iss.includes("cognito")) {
      payload = await verifier.verify(token);
    } else {
      payload = jwt.verify(token, process.env.JWT_SECRET!);
    }

    res.locals.userId = payload.sub || payload.cognito_id;
    res.locals.email = payload.email;
    next();
  } catch (error) {
    return res.status(401).send("Unauthorized: Invalid token");
  }
};

export default auth;
