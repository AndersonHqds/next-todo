import Task from "../model/Task";

export default function Home() {

  let task: Task = new Task(1, 'Task example');
  task = task.toggleStatus()
  task = task.toggleStatus()

  return (
    <div className={`
      flex flex-col
      justify-center
      items-center
      text-white
      bg-purple-600
      h-screen
    `}>
      <span>{task.id}</span>
      <span>{task.description}</span>
      <span>{task.completed ? 'Concluída' : 'Ativa'}</span>
    </div>
  )
}
