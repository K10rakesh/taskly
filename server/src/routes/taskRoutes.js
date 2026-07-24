const express = require("express");
const router = express.Router();
const createTaskController = require("../controllers/taskController");
const createTaskValidator = require('../validators/task.validator');
const validationMiddleware = require('../middleware/validation.middleware');

router.post("/", createTaskValidator, validationMiddleware, createTaskController);

module.exports = router; 