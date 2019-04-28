const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('form', { title: 'Form' });
});

router.post('/', (req, res) => {
    let email = req.body.emailInput;
    console.log(email);
});

module.exports = router;