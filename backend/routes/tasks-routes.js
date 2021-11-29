const express = require("express");
const router = express.Router();

const tasksController = require("../controllers/tasks-controller");

router.post("/addtask", tasksController.createTask);

router.get("/gettask/:tid", tasksController.getTaskById);

router.post("/addsubject/:tid", tasksController.addSubject);

module.exports = router;
