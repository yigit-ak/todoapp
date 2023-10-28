import TaskDataService from "../services/task";

export default function Task(props) {
  const { task } = props;

  const deleteTask = async () => {
    try {
      await TaskDataService.delete(props.task._id);
      props.updateTaskList();
    } catch (error) {
      console.log(error.message);
    }
  };

  const toggleTask = async () => {
    try {
      await TaskDataService.update(props.task._id, {
        completed: String(!props.task.completed),
      }); // ATTENTION! true/false should be a String
      await props.updateTaskList();
      await props.updateCompletedTasks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={task.completed ? "completed-task" : "task"}>
      <div className="checkbox" onClick={toggleTask}>
        {task.completed ? (
          <svg
            width="18"
            height="15"
            viewBox="0 0 15 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.447297 6.10404L2.79957 3.75176L5.48423 6.38529L11.774 0.121082L14.1263 2.47336L5.48423 11.0643L0.447297 6.10404Z"
              fill="#1A1A1A"
            />
          </svg>
        ) : (
          ""
        )}
      </div>
      <span className="task-title">{task.title}</span>
    </div>
  );
}
