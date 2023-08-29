import { type NextFunction, type Request, type Response } from "express";
import admin from "firebase-admin";
import { type DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
import CustomError from "../../../CustomError/CustomError";
import auth from "../auth";

jest.mock("firebase-admin");

const token: Partial<DecodedIdToken> = {};

admin.auth = jest.fn().mockReturnValue({
  verifyIdToken: jest.fn().mockResolvedValue(token as DecodedIdToken),
});

describe("Given an authenification middleware ", () => {
  describe("When it receives a request with a validated token", () => {
    test("Then it should call the passed next function without any arguments", async () => {
      const req: Partial<Request> = {
        header: jest.fn().mockReturnValue("token"),
      };

      const res: Partial<Response> = {};
      const next: NextFunction = jest.fn();

      await auth(req as Request, res as Response, next);

      expect(next).toHaveBeenCalledWith();
    });
  });

  describe("When it receives a request without a token", () => {
    test("Then it should call the new function with a custom error", async () => {
      const customError = new CustomError(
        "Unauthorized",
        401,
        "Not token provided",
      );

      const req: Partial<Request> = {
        header: jest.fn().mockReturnValue(undefined),
      };

      const res: Partial<Response> = {};
      const next: NextFunction = jest.fn();

      await auth(req as Request, res as Response, next);

      expect(next).toHaveBeenCalledWith(customError);
    });
  });
});
