import { type NextFunction, type Request, type Response } from "express";
import admin from "firebase-admin";
import CustomError from "../../CustomError/CustomError.js";
import firebaseApp from "../../firebase.js";

const auth = async (req: Request, _res: Response, next: NextFunction) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      const error = new CustomError("Unauthorized", 401, "Not token provided");
      next(error);
      return;
    }

    await admin.auth(firebaseApp).verifyIdToken(token);

    next();
  } catch (error: unknown) {
    const customError = new CustomError(
      "Invalid token",
      401,
      (error as Error).message,
    );

    next(customError);
  }
};

export default auth;
