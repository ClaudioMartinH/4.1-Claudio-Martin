import { Router } from "express";
import { UserController } from "../controllers/userController";
import basicAuth from "express-basic-auth";
import { Request } from "express";

const userRouter = Router();
const userController = new UserController();

userRouter.post("/users", userController.addUser)

userRouter.use(
  basicAuth({
    users: {
      admin: "password123",
    },
    challenge: true,
    unauthorizedResponse: (req: Request ) => "Unauthorized",
  })
);

userRouter.get("/users/:username", userController.findUserByName)

export { userRouter };