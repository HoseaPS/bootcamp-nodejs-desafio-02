const express = require('express')
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

const routes = express.Router()

const UserController = require('./app/controlers/UserController')
const SessionController = require('./app/controlers/SessionController')

routes.get('/', SessionController.create)
routes.post('/signin', SessionController.store)

routes.get('/signup', UserController.create)
routes.post('/signup', upload.single('avatar'), UserController.store)

routes.get('/app/dashboard', (req, res) => {
  console.log(req.session.user)
  return res.render('auth/dashboard')
})

module.exports = routes
