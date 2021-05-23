import "../styling/TaskItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TaskItem = ({ id, text, checked, remove, edit }) => {
  return (
    <li className="task">
      <label htmlFor={text} className="task__label">
        <input
          className="task__checkbox"
          type="checkbox"
          onChange={() => edit(id, checked)}
          checked={checked}
        />
        <span
          className="task__text"
          style={{ textDecoration: checked ? "line-through" : "" }}
        >
          {text}
        </span>
      </label>
      <button onClick={() => remove(id)} className="task__delete-button">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
};

export default TaskItem;
