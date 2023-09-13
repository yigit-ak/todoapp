const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
    const {completed} = req.query;
    const queryObject = {};

    if(completed) {
        queryObject.completed = completed === "true" ? true : false;
    }

    let result = Task.find(queryObject);
    const tasks = await result;

    if (!tasks)
        return res.status(404).json({success: false, message: "no tasks found"});
    res.status(200).json({success: true, data: tasks});
};

const getTask = async (req, res) => {
    const {taskId} = req.params;
    const task = await Task.findOne({_id: taskId});
    if (!task)
        return res.status(404).json({success: false, message: 'Task not found'});
    res.status(200).json({success: true, data: task});
};

const addTask = async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({success: true});
};

const deleteTask = async (req, res) => {
    const {taskId} = req.params;
    const task = await Task.deleteOne({_id: taskId});
    if (!task)
        return res.status(401).json({success: false, message: 'Task not deleted'});
    res.status(200).json({success: true, data: task});
}

const updateTask = async (req, res) => {
    const {taskId} = req.params;
    const task = await Task.findOneAndUpdate({_id: taskId}, req.body,
        {new: true, runValidators: true});
    if(!task)
        return res.status(404).json({success: false, message: 'Task not found'});
    res.status(200).json({success: true, data: task});
}

module.exports = {getAllTasks, getTask, updateTask, deleteTask, addTask};