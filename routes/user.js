require('../mongoose')

const router = require('express').Router();
router.post(('/'), require('../controllers/postUser'))

module.exports = router