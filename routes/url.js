require('../mongoose')

const router = require('express').Router();
router.post(('/'), require('../controllers/postUrl'))
router.get(('/:shorturl'), require('../controllers/getLongUrl'))
module.exports = router