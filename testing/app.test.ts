import { beforeAll, describe, expect, test } from "vitest"
import { Task } from "../src/domain/entities/Task"
import {TaskRepositoryImpl} from "../src/infrastructure/repositories/TaskRepositoryImpl"

describe("TodoList API REST testing", ()=>{
    beforeAll(()=>{
        const tasks: Task[] = [];
    });
    test("Should add a task to the task array", ()=>{
        const testTaskRepo = new TaskRepositoryImpl();
        let task = new Task(1, "testing",false)
        testTaskRepo.addTask(task);
        expect(testTaskRepo.getTasks.length).toEqual(1)
    });
    test("Should delete a task from the array", ()=> {
        const testTaskRepo = new TaskRepositoryImpl();
        let task = new Task(1, "testing",false)
        testTaskRepo.addTask(task);
        testTaskRepo.deleteTaskById(1);
        expect(testTaskRepo.getTasks.length).toEqual(0)
    });
    test("Should return all the tasks in the array",()=>{
        const testTaskRepo = new TaskRepositoryImpl();
        let task = new Task(1, "testing",false)
        let task2 = new Task(2, "learning",false)
        testTaskRepo.addTask(task);
        testTaskRepo.addTask(task2);
        testTaskRepo.getAllTasks();
        expect(testTaskRepo.getTasks).toHaveLength(2)
    });
    test("Should toggle completed a task", () => {
        const testTaskRepo = new TaskRepositoryImpl();
        let task = new Task(1, "testing",false);
        testTaskRepo.addTask(task);
        task.toggleCompleted();
        expect(task.completed).toBe(true)
    })
})