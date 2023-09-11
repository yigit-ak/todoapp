import TaskDataService from '../services/task';

export default function Task(props) {
    const {task} = props;

    const deleteTask = () => {
        TaskDataService.delete(props.task._id);
    }

    const toggleTask = () => {
        TaskDataService.update(props.task._id, {"completed": String(!props.task.completed)}); // ATTENTION! true/false should be a String
    }

    const deleteTaskButton = <svg className="delete-task-button" viewBox="0 0 48 48" onClick={deleteTask}>
    <path d="M 39.486328 6.9785156 A 1.50015 1.50015 0 0 0 38.439453 7.4394531 L 24 21.878906 L 9.5605469 7.4394531 A 1.50015 1.50015 0 0 0 8.484375 6.984375 A 1.50015 1.50015 0 0 0 7.4394531 9.5605469 L 21.878906 24 L 7.4394531 38.439453 A 1.50015 1.50015 0 1 0 9.5605469 40.560547 L 24 26.121094 L 38.439453 40.560547 A 1.50015 1.50015 0 1 0 40.560547 38.439453 L 26.121094 24 L 40.560547 9.5605469 A 1.50015 1.50015 0 0 0 39.486328 6.9785156 z"></path></svg>;

    return (
        <div className="task">
            <input type="checkbox" checked={task.completed} onChange={toggleTask}/>
            <span className="task-title">{task.title}</span>
            {deleteTaskButton}
        </div>
    )
}