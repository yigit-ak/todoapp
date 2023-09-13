import Task from './Task';
import {useState, useEffect} from 'react';
import TaskDataService from '../services/task';

export default function CompletedTasks(props) {
    const {completedTasks, fetchCompletedTasks} = props;

    useEffect( () => {
        fetchCompletedTasks()
    }, []);
    
    return (
        <div className="completed-tasks">
            <p>COMPLETED TASKS</p>
            {completedTasks.map(task => {
                return (<Task task={task} key={task._id} updateTaskList={props.updateTaskList}  updateCompletedTasks={fetchCompletedTasks}/>)
            })}
        </div>
    );

    
}