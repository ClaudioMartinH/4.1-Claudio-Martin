import { Request, Response, NextFunction } from "express";
import cors from "cors";

export const cacheControlMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.setHeader("Cache-control", "no-cache");
  next();
};
const CORS_OPTIONS = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  headersAllowed: ["Constent-Type", "Authorization"],
};

export const corsMiddleware = cors(CORS_OPTIONS);