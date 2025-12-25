const Task = require('../models/task');


const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createTask = async (req, res) => {
    try {
        const newTask = new Task(req.body);
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



const updateTask = async (req, res) => {
    try {
        
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,         
        });

        if (!task) 
        return res.status(404).json({ message: 'Task Not Found' });

        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) 
        return res.status(404).json({ message: 'Task Not Found' });

        res.status(200).json({ message: 'successful'});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports={getAllTasks,createTask,updateTask,deleteTask};
