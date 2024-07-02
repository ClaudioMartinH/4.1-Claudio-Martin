import { Router } from "express";
import { UserController } from "../controllers/userController";

const router = Router();
const userController = new UserController();

router.get("/users/:username", userController.findUserByName)
router.post("/user", userController.addUser)

export default router;