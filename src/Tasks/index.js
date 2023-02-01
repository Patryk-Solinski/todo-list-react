import "./style.css";
import { List, Item, Content } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => {
    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <button
                        className="task__button task__button--done"
                        onClick={() => toggleTaskDone(task.id)}
                    >
                        {task.done ? "✓" : " "}
                    </button>
                    <Content done={task.done}>
                        {task.id} - {task.content}
                    </Content>
                    <button
                        className="task__button task__button--remove"
                        onClick={() => removeTask(task.id)}
                    > 🗑

                    </button>
                </Item>
            ))}
        </List>
    )

};

export default Tasks;