const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');




router.get('/register', (req, res)=> {
    res.render('register');
})

router.post('/register',
    
    body('emial').trim().isEmail().isLength({min: 8}),
    body('password').trim().isLength({min: 6}),
    body('username').trim().isLength({min: 3}),

    (req, res)=> {

        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Invalid data'
        });
   }    
   console.log(req.body);   
    
    res.send('User registered');
    res.send(errors);
} )


module.exports = router;