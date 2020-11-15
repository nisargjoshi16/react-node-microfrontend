const express = require('express')
const { signup,signin, signout, requireSignin } = require('../controllers/auth')
const router = express.Router()

const {runValidation} = require('../validator')
const {signupValidator,userSigninValidator} = require('../validator/auth')

router.post('/signup',signupValidator, runValidation, signup )
router.post('/signin', userSigninValidator, runValidation, signin);
router.get('/signout', signout);
// test
router.get('/secret', requireSignin, (req, res) => {
    res.json({
        message: 'you have access to secret page'
    });
});
module.exports = router