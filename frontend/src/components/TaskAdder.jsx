import TaskDataService from "../services/task";
import { useState } from "react";

export default function TaskAdder(props) {
  const [newTask, setNewTask] = useState({});
  const [isAddingTask, setIsAddingTask] = useState(false);

  // change the current task on a change
  const handleInputChange = (event) => {
    setNewTask((previousTask) => {
      return {
        ...previousTask,
        title: event.target.value,
      };
    });
  };

  const addNewTask = (event) => {
    setIsAddingTask(true);
  };

  // send the new task to the DB on [Enter]
  const addTask = async (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      try {
        await TaskDataService.add(newTask);
        // reset the newTask
        setNewTask({});
        // reset text field
        event.target.value = "";
        // update task list
        props.updateTaskList();
        setIsAddingTask(false);
      } catch (error) {
        console.log(error.response);
      }
    } else if (event.key === "Enter" && event.target.value === "") {
      setIsAddingTask(false);
    }
  };

  if (isAddingTask) {
    return (
      <div
        className="task new-task"
        onKeyDown={addTask}
        onChange={handleInputChange}
      >
        <div className="checkbox"></div>
        <input type="text" className="task-title" maxLength="255" />
      </div>
    );
  } else {
    return (
      <div className="task-adder" onClick={addNewTask}>
        <div className="checkbox">+</div>
        <div className="task-title">Add New Task</div>
      </div>
    );
  }
}
