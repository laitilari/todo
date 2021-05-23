import "../styling/TaskInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const TaskInput = ({ taskInputValue, setTaskInputValue, addTask }) => {
  return (
    <div>
      <form>
        <input
          className="task-input"
          placeholder="Add a task"
          value={taskInputValue}
          onChange={(e) => setTaskInputValue(e.target.value)}
        />
        <button
          className="task-input__button"
          onClick={() => addTask()}
          type="button"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>
    </div>
  );
};

export default TaskInput;
