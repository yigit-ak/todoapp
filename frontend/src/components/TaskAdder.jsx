import TaskDataService from '../services/task';
import {useState} from "react";

export default function TaskAdder(props) {

    const [newTask, setNewTask] = useState({});

    // change the current task on a change
    const handleInputChange = (event) => {
        setNewTask(previousTask => {
            return {
                ...previousTask,
                title: event.target.value,
            }
        });
    }

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
            } catch (error) {
                console.log(error.response);
            }
        }
    }

    return (
        <div className="task-adder">
            <input
                type="text"
                placeholder="Enter a task..."
                onKeyDown={addTask}
                onChange={handleInputChange}
            />
        </div>
    );
}