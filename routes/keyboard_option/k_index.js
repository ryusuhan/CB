var express = require('express');
var router = express.Router();

router.use('/keyboard',require('./main_keyboard.js'));

module.exports = router;