import "../styling/TaskItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TaskItem = ({ id, text, checked, remove, edit }) => {
  const createCheckBox = () => {
    if (checked) {
      return (
        <input
          className="task__checkbox"
          type="checkbox"
          onChange={edit}
          checked
        />
      );
    }
    return <input className="task__checkbox" type="checkbox" onChange={edit} />;
  };

  const createTaskTextSpan = () => {
    return (
      <span
        className="task__text"
        style={{ textDecoration: checked ? "line-through" : "" }}
      >
        {text}
      </span>
    );
  };

  return (
    <li className="task">
      <label htmlFor={text} className="task__label">
        {createCheckBox()}
        {createTaskTextSpan()}
      </label>
      <button onClick={remove} className="task__delete-button">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
};

export default TaskItem;
