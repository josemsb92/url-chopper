require('../mongoose')

const router = require('express').Router();
router.post(('/'), require('../controllers/postTempUrl'))
router.get(('/'), require('../controllers/getLongUrl'))
module.exports = router