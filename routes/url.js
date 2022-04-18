require('../mongoose')

const router = require('express').Router();
router.post(('/'), require('../controllers/postUrl'))
router.get(('/:shorturl'), require('../controllers/getUrlData'))
module.exports = router