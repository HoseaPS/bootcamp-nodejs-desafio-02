const { User } = require('../models')

class UserControler {
  create (req, res) {
    return res.render('auth/signup')
  }

  async store (req, res) {
    req.body.avatar = 'teste.jpg'

    console.log(req.body)

    await User.create(req.body)

    return res.redirect('/')
  }
}

module.exports = new UserControler()
