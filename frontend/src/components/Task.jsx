export default function Task(props) {
    const {task} = props;
    return (
        <div className="task">
            <input type="checkbox" checked={task.completed}/>
            <span className="task-title">{task.title}</span>
        </div>
    )
}