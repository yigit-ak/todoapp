import Task from "./Task";
import TaskAdder from "./TaskAdder";
import TaskDataService from "../services/task";
import { useState, useEffect } from "react";

export default function TaskContainer() {
  const [taskList, setTaskList] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await TaskDataService.getAll();

      setTaskList(response.data.data);
    } catch (err) {
      console.log(err.response);
    }
  };

  const fetchCompletedTasks = async () => {
    try {
      const response = await TaskDataService.getAll("completed=true");
      setCompletedTasks(response.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="task-container">
      {taskList.map((task) => {
        return (
          <Task
            task={task}
            key={task._id}
            updateTaskList={fetchTasks}
            updateCompletedTasks={fetchCompletedTasks}
          />
        );
      })}
      <TaskAdder updateTaskList={fetchTasks} />
    </div>
  );
}
