require('../mongoose')
const router = require('express').Router();
const User = require('../models/User')
router.post(('/'), (req,res) => {
    const newUser = new User({
        Name:  'Jose Miguel',
  LastName: 'Sanchez',
  Age:   29 
    })
    newUser.save().then(savedUser => res.json(savedUser))
})


module.exports = router