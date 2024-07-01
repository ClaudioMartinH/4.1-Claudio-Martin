import { Task } from "/entregas/entrega-4-API-REST/domain/entities/Task";

export interface TaskRepository {
  getAllTasks(): Promise<Task[]>;
  getTaskById(id: string): Promise<Task | null>;
  addTask(task: Task): Promise<void>;
  updateTask(task: Task): Promise<void>;
  deleteTask(id: string): Promise<void>;
}