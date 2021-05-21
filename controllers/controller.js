const axios = require('axios')

const post = async (req, res, next) => {
  try {
    // const { email, password, name } = req.body
    return res.status(200).json({
      code: 200,
      message: 'Сервер работает',
    })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  post,
}
