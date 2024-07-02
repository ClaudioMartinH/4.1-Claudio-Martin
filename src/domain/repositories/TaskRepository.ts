import { Task } from "../entities/Task"

export interface TaskRepository {
  getAllTasks(): Promise<Task[]>;
  getTaskById(id: number): Promise<Task | null>;
  addTask(task: Task): Promise<Task>;
  updateTask(task: Task): Promise<void>;
  deleteTaskById(id: number): Promise<void>;
}
