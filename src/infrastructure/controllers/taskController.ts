import { Request, Response } from "express";
import { TaskRepositoryImplementation } from "../../domain/repositories/TaskRepositoryImpl";
import { TaskService } from "../../application/services/taskServices";
import error404 from "../../infrastructure/controllers/errorController"


const taskRepository = new TaskRepositoryImplementation();

export class TaskController {
  public async getTasks(req: Request, res: Response) {
    try {
      const taskService = new TaskService(taskRepository);
      const tasks = await taskService.getTasks();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: "There was an 500 error" });
    }
  }

  public async getTaskById(req: Request, res: Response) {
    try {
      const { id: idString } = req.params;
      const id = parseInt(idString);
      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid ID format" });
      }
      const taskService = new TaskService(taskRepository);
      const task = await taskService.getTaskById(id);
      if (!task) {
        return error404;
      }
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ error: "There was an 500 error" });
    }
  }

  public async addTask(req: Request, res: Response) {
    try {
      const { id, title, completed } = req.body;
      const taskService = new TaskService(taskRepository);
      await taskService.addTask(id, title, completed);
      res
        .status(201)
        .json({ message: "New task created succesfully" });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Something went wrong creating your task" });
    }
  }

  public async updateTask(req: Request, res: Response) {
    try {
      const { id, title, completed } = req.body;
      const taskService = new TaskService(taskRepository);
      await taskService.updateTask(id, title, completed);
      res.status(200).json({ message: "Task updated succesfully" });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Something went wrong updating your task" });
    }
  }

  public async deleteTaskById(req: Request, res: Response) {
    try {
      const { id: idString } = req.params;
      const id = parseInt(idString);
      const taskService = new TaskService(taskRepository);
      await taskService.deleteTaskById(id);
      res
        .status(200)
        .json({ message: "Task deleted succesfully" });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Something went wrong deleting your task" });
    }
  }
}
