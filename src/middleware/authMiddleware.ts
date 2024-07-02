import { Request, Response, NextFunction } from "express";
import cors from "cors";


export const cacheControlMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.set("Cache-Control", "no-cache");
  next();
};

export const corsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
};