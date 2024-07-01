import { Request, Response } from "express";
import { TaskRepositoryImplementation } from "../../src/repositories/TaskRepositoryImpl";
import { TaskService } from "../services/taskServices";

const taskRepository = new TaskRepositoryImplementation();

export class TaskController {
  static async getTasks(req: Request, res: Response) {
    try {
      const taskService = new TaskService(taskRepository);
      const tasks = await taskService.getTasks();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: "There was an 500 error" });
    }
  }

  static async getTask(req: Request, res: Response) {
    try {
      const { id: idString } = req.params;
      const id = parseInt(idString);
      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid ID format" });
      }
      const taskService = new TaskService(taskRepository);
      const task = await taskService.getTask(id);
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ error: "There was an 500 error" });
    }
  }

  static async addTask(req: Request, res: Response) {
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

  static async updateTask(req: Request, res: Response) {
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

  static async deleteTask(req: Request, res: Response) {
    try {
      const { id: idString } = req.params;
      const id = parseInt(idString);
      const taskService = new TaskService(taskRepository);
      await taskService.deleteTask(id);
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
