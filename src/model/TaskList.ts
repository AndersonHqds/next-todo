import FilterType from "./FilterType";
import Task from "./Task";

export default class TaskList {
    #all: Task[];
    #usedFilter: FilterType;

    constructor(all: Task[], usedFilter = FilterType.NONE) {
        this.#all = all;
        this.#usedFilter = usedFilter ?? FilterType.NONE;
    }

    get items() {
        return this.applyFilterIn(this.#all);
    }

    get quantity() {
        return this.items.length;
    }

    get usedFilter() {
        return this.#usedFilter;
    }

    addTask(newTask: Task): TaskList {
        const all = [...this.#all];
        all.push(newTask);
        return new TaskList(all, this.usedFilter);
    }

    updateTask(updatedTask: Task): TaskList {
        const all = this.#all.map(task => task.id === updatedTask.id ? updatedTask : task)
        return new TaskList(all, this.usedFilter)
    }

    filterActives(): TaskList {
        if (!this.showingOnlyActives())
            return new TaskList(this.#all, FilterType.ACTIVES)
        return this
    }

    excludeCompleteds(): TaskList {
        const onlyActives = this.#all.filter(task => task.active);
        return new TaskList(onlyActives, FilterType.NONE)
    }

    filterCompleteds(): TaskList {
        if (!this.showingOnlyCompleteds())
            return new TaskList(this.#all, FilterType.COMPLETED)
        return this
    }

    removeFilter(): TaskList {
        if (!this.showingAll())
            return new TaskList(this.#all, FilterType.NONE)
        return this
    }

    showingAll(): boolean {
        return this.#usedFilter === FilterType.NONE;
    }

    showingOnlyActives(): boolean {
        return this.#usedFilter === FilterType.ACTIVES;
    }

    showingOnlyCompleteds(): boolean {
        return this.#usedFilter === FilterType.COMPLETED;
    }

    private applyActiveFilter(tasks: Task[]): Task[] {
        return tasks.filter(task => task.active);
    }

    private applyCompletedFilter(tasks: Task[]): Task[] {
        return tasks.filter(task => task.completed);
    }

    private applyFilterIn(task: Task[]): Task[] {
        if (this.showingOnlyActives()) {
            return this.applyActiveFilter(task)
        }
        else if (this.showingOnlyCompleteds()) {
            return this.applyCompletedFilter(task);
        }

        return [...task];
    }
}