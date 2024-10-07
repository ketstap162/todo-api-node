const router = require('express').Router();
const multer = require('multer');
const authController = require('../controller/auth')
const upload = multer();

router.post('/registration', upload.none(), authController.registration);
router.post('/login', upload.none(), authController.login);
router.get('/users', authController.getUsers);

module.exports = router;
