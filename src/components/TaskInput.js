import { useState } from "react";
import "../styling/TaskInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import fire from "../fire";
import { uid } from "uid";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const addTask = () => {
    const taskId = uid();
    fire.database().ref(`tasks/${taskId}`).set({
      text: task,
      id: taskId,
      checked: false,
    });
    setTask("");
  };

  const inputHandler = (event) => setTask(event.target.value);

  return (
    <div>
      <form>
        <input
          className="task-input"
          placeholder="Add a task"
          value={task}
          onChange={inputHandler}
        />
        <button className="task-input__button" onClick={addTask} type="button">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>
    </div>
  );
};

export default TaskInput;
