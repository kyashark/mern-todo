const Task = require('../models/Task');

// Get all tasks
exports.getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

// Create task
exports.createTask = async (req, res) => {
  const { title } = req.body;
  const newTask = new Task({ title });
  const savedTask = await newTask.save();
  res.status(201).json(savedTask);
};

// Update task
exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const updated = await Task.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

// Delete task
exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.json({ message: 'Task deleted' });
};
