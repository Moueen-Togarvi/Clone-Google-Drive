const express = require('express');
const router = express.Router();



router.get('/register', (req, res)=> {
    res.send('User test route');
})

router.post('/register', (req, res))


module.exports = router;