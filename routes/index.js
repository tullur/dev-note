const router = require('express').Router();

/* GET home page. */
router.use('/', require('./home'));

module.exports = router;
