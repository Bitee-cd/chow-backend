import express, { Response, Request, NextFunction } from "express";
import { ErrorStatus } from "./constants";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case ErrorStatus.VALIDATION_ERROR:
      res.json({
        title: "Validation Error",
        message: err.message,
      });
      break;
    case ErrorStatus.UNAUTHORIZED:
      res.json({
        title: "Unauthorized",
        message: err.message,
      });
      break;
    case ErrorStatus.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
      });
      break;
    case ErrorStatus.NOT_FOUND:
      res.json({
        title: "Not found",
        message: err.message,
      });
      break;
    default:
      console.log("No Error");
      break;
  }
};
