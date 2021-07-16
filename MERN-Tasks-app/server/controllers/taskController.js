const Task = require('../models/Tasks');
const Project = require('../models/Project');
const { validationResult } = require('express-validator');

//create task
exports.createTask = async (req, res)=>{ 
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() })
    }

    try {
        const { projectId } = req.body;

        //check if project exist
        const project = await Project.findById(projectId);
        if(!project) {
            return res.status(404).json({ msg: 'Project not found' })
        }
        //verify project owner 
        if(project.owner.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Unauthorized' })
        }
        //create task
        const task = new Task(req.body);
        await task.save();
        res.json({ task });

    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
};

// get all tasks
exports.getTasks = async (req, res)=>{
    try {
        const { projectId } = req.body;

        //check if project exist
        const project = await Project.findById(projectId);
        if(!project) {
            return res.status(404).json({ msg: 'Project not found' })
        }
        //verify project owner 
        if(project.owner.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Unauthorized' })
        }

        //get tasks by project
        const tasks = await Task.find({ project: projectId });
        res.json({ tasks });

    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
};


//update task
exports.updateTask = async (req, res)=>{
    try {
        const { projectId, name, isCompleted } = req.body;

        //check if task exist
        const taskInDB = await Task.findById(req.params.id);
        if(!taskInDB) {
            return res.status(404).json({ msg: 'Task not found' })
        }

        //extract project
        const projectInDB = await Project.findById(projectId);
        
        //verify project owner 
        if(projectInDB.owner.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Unauthorized' })
        }
        
        //create new task with new info
        const newTask = {};
        if(name) newTask.name = name;
        if(isCompleted) newTask.isCompleted = isCompleted;
        const task = Task.findOneAndUpdate({_id: req.params.id}, newTask, { new: true });
        res.json({ task });

    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
};

//delete task
exports.deleteTask = async (req, res)=>{
    try {
        const { projectId } = req.body;

        //check if task exist
        const taskInDB = await Task.findById(req.params.id);
        if(!taskInDB) {
            return res.status(404).json({ msg: 'Task not found' })
        }

        //extract project
        const projectInDB = await Project.findById(projectId);
        
        //verify project owner 
        if(projectInDB.owner.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Unauthorized' })
        }
        
        //delete
        await Task.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Task deleted' });

    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
};