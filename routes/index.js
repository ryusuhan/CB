var express = require('express');
var router = express.Router();

router.use('/keyboard', require('./keyboard_option/k_index.js'));


module.exports = router;
