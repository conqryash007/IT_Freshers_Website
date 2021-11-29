const httpError = require("./../models/http-error");
const Task = require("./../models/task");

// FOR CREATING NEW TASKS
exports.createTask = async (req, res, next) => {
  const body = req.body;
  const newTask = new Task(body);
  try {
    await newTask.save();
  } catch (err) {
    return next(new httpError("Something went wrong", 500));
  }
  res.status(201).json({ user: newTask.toObject({ getters: true }) });
};

// FOR GETTING DATA RELATED TO TASK
exports.getTaskById = async (req, res, next) => {
  const id = req.params.tid;
  let currTask;
  try {
    currTask = await Task.findById(id);
  } catch (err) {
    return next(new httpError("Something went wrong", 500));
  }
  if (!currTask) {
    return next(new httpError("Task not found", 500));
  }
  res.status(201).json({ user: currTask.toObject({ getters: true }) });
};

//FOR ADDING NEW DATA TO SAVED TASKS
exports.addSubject = async (req, res, next) => {
  const id = req.params.tid;
  const body = req.body;
  let currTask;
  try {
    currTask = await Task.findById(id);
  } catch (err) {
    return next(new httpError("Something went wrong", 500));
  }

  if (!currTask) {
    return next(new httpError("Task not found", 500));
  }

  try {
    await currTask.data.push(body);
    await currTask.save();
  } catch (err) {
    return next(new httpError("Something went wrong in creation", 500));
  }

  res.status(201).json({ user: currTask.toObject({ getters: true }) });
};
