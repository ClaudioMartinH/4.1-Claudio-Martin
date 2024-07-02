import express, { NextFunction, Request, Response } from "express";
import { cacheControlMiddleware } from "./src/middleware/authMiddleware";
import { corsMiddleware } from "./src/middleware/authMiddleware";
import { userRouter } from "./src/infrastructure/routes/userRoutes";
import { taskRouter } from "./src/infrastructure/routes/taskRoutes";
import errorController from "./src/infrastructure/controllers/errorController";
import basicAuth from "express-basic-auth";

const app = express(); 
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cacheControlMiddleware);
app.use(corsMiddleware);

app.use(
  basicAuth({
    users: {
      admin: "password123",
    },
    challenge: true,
    unauthorizedResponse: (req: express.Request) => "Unauthorized",
  })
);

app.use("/api", userRouter)
app.use("/api", taskRouter)

app.use(errorController.error404);


app.listen(PORT, ()=>{
  console.log(`Server running on port localhost:${PORT}`);
})