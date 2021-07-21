import FilterType from "../model/FilterType";
import Task from "../model/Task";
import TaskList from "../model/TaskList";

const tasks: Task[] = [
    Task.createActive(1, "Estudar NextJS"),
    Task.createCompleted(2, "Fazer curso nodejs"),
    Task.createActive(3, "Ler livro cleancode")
]

export default new TaskList(tasks, FilterType.NONE);