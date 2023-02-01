import { TasksForm, Field, Button} from "./styled";
import { useState } from "react";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() === "") {
            return;
        }
        
        addNewTask(newTaskContent.trim());
        setNewTaskContent("")
    };

  return (
    <TasksForm onSubmit={onFormSubmit}>
      <Field
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)} />
      <Button>Dodaj zadanie</Button>
    </TasksForm>
  );
};

  export default Form;