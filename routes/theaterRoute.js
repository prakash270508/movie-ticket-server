const express = require('express')

const {postTheater} = require('../controller/theaterController')

const router = express.Router()

router.route('/post-theater').post(postTheater)

module.exports = router;