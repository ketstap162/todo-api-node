const router = require('express').Router();
const multer = require('multer');
const { Task } = require('../../db/model');

const taskController = require('../controller/task')

const upload = multer();

router.get('/', taskController.getTaskList);
router.post('/', upload.none(), taskController.createTask);
router.post('/submit', upload.none(), taskController.reverseIsDone);

module.exports = router;
