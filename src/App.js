import React, { useEffect, useState } from "react";
import "./App.css";
import fire from "./fire";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import { TaskList } from "./components/TaskList";
import icon from "./icon.png";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let tasksInDB = fire.database().ref("tasks");

    tasksInDB.on("child_added", (incomingTask) => {
      let task = {
        id: incomingTask.key,
        text: incomingTask.val().text,
        checked: incomingTask.val().checked,
      };
      setTasks((tasks) => [...tasks, task]);
    });

    tasksInDB.on("child_removed", (removedTask) => {
      setTasks((tasks) => tasks.filter((task) => task.id !== removedTask.key));
    });

    tasksInDB.on("child_changed", (changedTask) => {
      setTasks((tasks) =>
        tasks.map((el) => (el.id === changedTask.key ? changedTask.val() : el))
      );
    });
  }, []);

  const deleteTask = (id) => {
    fire.database().ref(`tasks/${id}`).remove();
  };

  const editTask = (id, checked) => {
    fire.database().ref(`tasks/${id}`).update({
      checked: !checked,
    });
  };

  const taskElements = tasks.map((task) => {
    return (
      <TaskItem
        key={task.id}
        id={task.id}
        text={task.text}
        checked={task.checked}
        remove={() => deleteTask(task.id)}
        edit={() => editTask(task.id, task.checked)}
      />
    );
  });

  return (
    <div className="app">
      <Header text="Digitalent ToDo" icon={icon} />
      <TaskInput />
      <TaskList tasks={taskElements} />
    </div>
  );
};

export default App;
