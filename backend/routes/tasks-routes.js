const express = require("express");
const router = express.Router();

const tasksController = require("../controllers/tasks-controller");

router.post("/addtask", tasksController.createTask);

router.get("/gettask/:tid", tasksController.getTaskById); //remove anss

router.post("/check/:uid/:tid/:qid", tasksController.checkAns);

router.post("/addsubject/:tid", tasksController.addSubject);

module.exports = router;
