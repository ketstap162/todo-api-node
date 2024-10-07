const { Task } = require('../../db/model');

class taskController{
    async getTaskList(req, res, next){
        try {
            const tasks = await Task.findAll();
            
            res.json(tasks);
        } catch (error) {
            console.error('Error retrieving tasks:', error);
            res.status(500).json({ error: 'Error retrieving tasks' });
        }
    };

    async createTask(req, res, next){
        const { taskTitle, taskDescription } = req.body;
    
        try {
            const newTask = await Task.create({
            title: taskTitle,
            description: taskDescription
            });
        
            res.status(201).json(newTask);
        } catch (error) {
            console.error('Error creating task:', error);
            res.status(500).json({ error: 'Error creating task' });
        }
    };

    async reverseIsDone(req, res, next){
        const { taskID } = req.body;
        try {
            const task = await Task.findByPk(taskID);
        
            if (task) {
              console.log('Current Task Status:', task.isDone);
              
              task.isDone = !task.isDone;
              
              await task.save();
        
              res.status(200).json({
                message: `Task with ID=${taskID} submitted successfully`,
                task: task
              });
            } else {
              res.status(404).json({ message: `Task with ID=${taskID} not found` });
            }
        } catch (error) {
        console.error('Error submitting task:', error);
        res.status(500).json({ error: 'Error submitting task' });
        }
    }

};

module.exports = new taskController();
