import { Router } from "express";
import { TaskController } from "../controllers/taskController";

const router = Router();
const taskController = new TaskController();

router.get("/tasks", taskController.getTasks)
router.post("/tasks", taskController.addTask)
router.get("/tasks/:id", taskController.getTaskById)
router.put("/tasks/:id", taskController.updateTask)
router.delete("/tasks/:id", taskController.deleteTaskById)

export default router;