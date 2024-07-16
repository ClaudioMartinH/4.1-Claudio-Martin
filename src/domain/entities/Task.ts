export class Task {
    id: Number
    title: String
    completed: boolean

    constructor(id: number, title: string, completed: boolean){
        this.id = id
        this.title = title
        this.completed = completed
    }
    toggleCompleted(): void {
        this.completed = !this.completed
    }
}