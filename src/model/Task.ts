export default class Task {
    #id: number
    #description: string
    #completed: boolean

    constructor(id: number, description: string, completed = false) {
        this.#id = id
        this.#description = description
        this.#completed = completed
    }

    static createActive(id: number, description: string) {
        return new Task(id, description);
    }

    static createCompleted(id: number, description: string) {
        return new Task(id, description, true);
    }

    get id() {
        return this.#id
    }
    
    get description() {
        return this.#description
    }

    get completed() {
        return this.#completed
    }

    get active() {
        return !this.#completed
    }

    toggleStatus() {
        return this.completed ? this.activate() : this.complete()
    }

    complete() {
        return Task.createCompleted(this.id, this.description)
    }

    activate() {
        return Task.createActive(this.id, this.description);
    }
}