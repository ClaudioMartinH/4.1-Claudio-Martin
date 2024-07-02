import { Router } from "express";
import { TaskController } from "../controllers/taskController";
import basicAuth from "express-basic-auth";
import { Request } from "express";

const taskRouter = Router();
const taskController = new TaskController();
taskRouter.use(
  basicAuth({
    users: {
      admin: "password123",
    },
    challenge: true,
    unauthorizedResponse: (req: Request) => "Unauthorized",
  })
);

taskRouter.get("/tasks", taskController.getTasks)
taskRouter.post("/tasks", taskController.addTask)
taskRouter.get("/tasks/:id", taskController.getTaskById)
taskRouter.put("/tasks/:id", taskController.updateTask)
taskRouter.patch("/tasks/:id", taskController.toggleCompleted)
taskRouter.delete("/tasks/:id", taskController.deleteTaskById)

export { taskRouter };