import TaskList from "../../model/TaskList";
import ButtonList from "./ButtonList";
import FooterList from "./FooterList";
import ItemList from "./ItemList";

interface ListProps {
  tasks: TaskList;
  onChange: (task: TaskList) => void;
}
const List: React.FC<ListProps> = (props) => {
  const { tasks } = props;

  const renderTasks = () =>
    tasks.items.map((task) => (
      <ItemList
        key={task.id}
        value={task.description}
        completed={task.completed}
        updateStatus={() => {
          const updatedTask = task.toggleStatus();
          const newList = tasks.updateTask(updatedTask);
          props.onChange(newList);
        }}
      />
    ));

  return (
    <div
      className={`
            flex w-3/5 items-start relative
        `}
    >
      <ul
        className={`
                absolute -top-14
                w-full list-none
                bg-white shadow-lg rounded-lg
            `}
      >
        {renderTasks()}
        <FooterList tasks={props.tasks} onChange={props.onChange} />
      </ul>
    </div>
  );
};

export default List;
