import { Task } from "../../domain/entities/Task";
import { TaskRepository } from "../../domain/repositories/TaskRepository";

export class TaskRepositoryImplementation implements TaskRepository {
  private tasks: Task[] = [];

  async getAllTasks(): Promise<Task[]> {
    return this.tasks;
  }

  async getTaskById(id: number): Promise<Task | null> {
    const task = this.tasks.find((task) => task.id === id);
    return task || null;
  }

  async addTask(task: Task): Promise<Task> {
    this.tasks.push(task);
    return task
  }
  async updateTask(task: Task): Promise<void> {
    const taskIndex = this.tasks.findIndex(element => element.id === task.id)
    if (taskIndex !== -1){
      this.tasks[taskIndex] = task;
    }
  }
  async deleteTaskById(id: number): Promise<void> {
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }
  
}
