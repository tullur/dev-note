const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.render('inform', {
        title: 'About'
    });
})

module.exports = router;