var express = require('express');
var router = express.Router();

router.use('/keyboard', require('./keyboard_option/main_keyboard.js'));


module.exports = router;
