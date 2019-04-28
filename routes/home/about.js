const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.render('index', {
        title: 'About'
    });
})

module.exports = router;