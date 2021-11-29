const express = require("express");
const router = express.Router();

const freshersContoller = require("../controllers/freshers-controller");

router.get("/", freshersContoller.getFreshers);

router.post("/addFresher", freshersContoller.addFresher);

router.post("/login", freshersContoller.login);

module.exports = router;
