const router = require('express').Router();

router.use('/user', require('./user'))
router.use(('/temp'), require('./temp'))

module.exports = router;