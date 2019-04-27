const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.render('inform', {
        title: 'Contact'
    });
})

module.exports = router;