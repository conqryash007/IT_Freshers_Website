const httpError = require("./../models/http-error");
const Task = require("./../models/task");
const Fresher = require("./../models/fresher");

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

//FOR CHECKING ANSWER
exports.checkAns = async (req, res, next) => {
  const { uid, tid, qid } = req.params;
  const userAns = req.body.answer;
  let currFresher;
  let currQues;
  try {
    currQues = await Task.find();
    currQues = currQues[tid];
    currFresher = await Fresher.findById(uid);
  } catch (err) {
    console.log(err);
    return next(new httpError("Something went wrong", 500));
  }
  if (!currQues) {
    return next(new httpError("No question with this id", 500));
  }
  [currQues] = currQues.data.filter((curr) => {
    return curr.id === qid;
  });
  const indx = Number(userAns.substr(-2));
  if (currFresher.task0[indx] !== null && currFresher.task0[indx] >= 0) {
    return next(new httpError("Already answered", 500));
  }

  try {
    if (userAns === currQues.answer) {
      currFresher.task0[indx] = 1;
      currFresher.score[tid] += 1;
      await Fresher.findByIdAndUpdate(uid, currFresher);
    } else {
      currFresher.task0[indx] = 0;
      await Fresher.findByIdAndUpdate(uid, currFresher);
    }
  } catch (err) {
    console.log(err);
    return next(new httpError("Something went wrong", 500));
  }

  res.send(currFresher);
};
