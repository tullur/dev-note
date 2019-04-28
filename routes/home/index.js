const router = require('express').Router();

router.use('/', require('./welcome'));
router.use('/about', require('./about'));
router.use('/contact', require('./contact'));
router.use('/form', require('./form'));

module.exports = router;
