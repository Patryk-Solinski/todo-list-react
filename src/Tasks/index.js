import "./style.css";

const Tasks = ({ tasks, hideDone }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`tasks__item${task.done && hideDone ? "list__tasks--hidden" : ""}`}>
                <button
                    className="task__button task__button--done">
                    {task.done ? "✓" : " "}
                </button>
                <span className={`tasks__content ${task.done ? "tasks__content--done" : ""}`}>
                    {task.content}
                </span>
                <button className="task__button task__button--remove"> 🗑
                </button>
            </li>
        ))}
    </ul>

);

export default Tasks;