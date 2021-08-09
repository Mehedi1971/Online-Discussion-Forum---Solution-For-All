const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const Registration = require('../models/registration')
const Post = require('../models/post')
router.get('/post', async (req, res) => {
  try {
    const connecte = await Post.find()
    res.json(connecte)
  } catch (es) {
    res.send('Error' + es)
  }
})
router.post('/post', async (req, res) => {
  const post = new Post({
    catagory: req.body.catagory,
    post: req.body.post,
  })

  try {
    const a1 = await post.save()
    res.json(a1)
  } catch (es) {
    res.send('Error')
  }
})

router.get('/', async (req, res) => {
  try {
    const connecte = await Registration.find()
    res.json(connecte)
  } catch (es) {
    res.send('Error' + es)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const registration = await Registration.findById(req.params.id)
    res.json(registration)
  } catch (es) {
    res.send('Error' + es)
  }
})

router.post('/registration', async (req, res) => {
  const registration = new Registration({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })

  try {
    const a1 = await registration.save()
    res.json(a1)
  } catch (es) {
    res.send('Error')
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const registration = await Registration.findById(req.params.id)
    registration.name = req.body.name
    registration.email = req.body.email
    registration.password = req.body.password

    const a1 = await registration.save()
    res.json(a1)
  } catch (es) {
    res.send('Error')
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const registration = await Registration.findById(req.params.id)
    registration.email = req.body.email
    const a1 = await registration.remove()
    res.json(a1)
  } catch (es) {
    res.send('Error')
  }
})

router.post('/login', async (req, res) => {
  try {
    const email = req.body.email
    const password = req.body.password

    const registration = await Registration.findOne({ email: email })

    const isMatch = await bcrypt.compare(password, registration.password)

    if (isMatch) {
      const a1 = await registration.save()
      res.json(a1)
    } else {
      res.send('Error1')
    }
    // if (registration.password === password) {
    //   const a1 = await registration.save()
    //   res.json(a1)
    // } else {
    //   res.send('Error')
    // }
  } catch (es) {
    res.send('Error2')
  }
})

module.exports = router
