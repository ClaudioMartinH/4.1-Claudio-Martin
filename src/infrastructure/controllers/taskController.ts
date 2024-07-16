import { Request, Response } from "express";
import { TaskRepositoryImpl } from "../repositories/TaskRepositoryImpl";
import { TaskService } from "../../application/services/taskServices";

const taskRepository = new TaskRepositoryImpl();

export class TaskController {
  public async getTasks(req: Request, res: Response) {
    try {
      const taskService = new TaskService(taskRepository);
      const tasks = await taskService.getTasks();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: "There was a 500 error" });
    }
  }

  public async getTaskById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const ID = parseInt(id, 10);
      if (isNaN(ID) || ID <= 0) {
        return res.status(400).json({ error: "Invalid ID format" });
      }
      const taskService = new TaskService(taskRepository);
      const task = await taskService.getTaskById(ID);
      if (!task) {
        return res.status(404).json({ error: "Task not found" });
      }
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ error: "There was a 500 error" });
    }
  }

  public async addTask(req: Request, res: Response) {
    try {
      const { title } = req.body;

      if (!title) {
        return res.status(400).json({ error: "Title can't be empty, task can't be created" });
      }

      const taskService = new TaskService(taskRepository);
      const tasks = await taskService.getTasks();
      const id = tasks.length + 1;

      await taskService.addTask(id, title, false);
      res.status(201).json({ message: "New task created successfully" });
    } catch (error) {
      res.status(500).json({ error: "Something went wrong creating your task" });
    }
  }

  public async updateTask(req: Request, res: Response) {
    try {
      const { title } = req.body;
      const { id } = req.params;
      const ID = parseInt(id)
      if (isNaN(ID) || ID <= 0) {
        return res.status(400).json({ error: "Invalid ID format" });
      }
      if (!title) {
        return res.status(400).json({ error: "Title can't be empty" });
      }

      const taskService = new TaskService(taskRepository);
      const task = await taskService.getTaskById(ID);
      if (!task) {
        return res.status(404).json({ error: "Task not found" });
      }

      await taskService.updateTask(ID, title, false);
      res.status(200).json({ message: "Task updated successfully" });
    } catch (error) {
      res.status(500).json({ error: "Something went wrong updating your task" });
    }
  }

  public async deleteTaskById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const taskId = parseInt(id, 10);
      if (isNaN(taskId) || taskId <= 0 ) {
        return res.status(400).json({ error: "Invalid ID format" });
      }

      const taskService = new TaskService(taskRepository);
      const task = await taskService.getTaskById(taskId);
      if (!task) {
        return res.status(404).json({ error: "Task not found" });
      }

      await taskService.deleteTaskById(taskId);
      res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Something went wrong deleting your task" });
    }
  }

  public async toggleCompleted(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const taskId = parseInt(id, 10);
      if (isNaN(taskId) || taskId <= 0) {
        return res.status(400).json({ error: "Invalid ID format" });
      }

      const taskService = new TaskService(taskRepository);
      const task = await taskService.getTaskById(taskId);
      if (!task) {
        return res.status(404).json({ error: "Task not found" });
      }

      await taskService.toggleCompleted(taskId);
      res.status(200).json({ message: "Task toggled completed successfully" });
    } catch (error) {
      res.status(500).json({ error: "Something went wrong completing your task" });
    }
  }
}
