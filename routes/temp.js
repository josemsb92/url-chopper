require('../mongoose')

const router = require('express').Router();
router.post(('/'), require('../controllers/postTempUrl'))

module.exports = router