const express = require('express')
const { signup } = require('../controllers/auth')
const router = express.Router()

const {runValidation} = require('../validator')
const {signupValidator} = require('../validator/auth')

router.post('/signup',signupValidator, runValidation, signup )

module.exports = router