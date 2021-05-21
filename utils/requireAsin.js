module.exports.requireAsin = (req, res, next) => {
  const { ASIN } = req.body
  if (!ASIN) {
    return res.status(400).json({
      code: 400,
      message: 'ASIN is required',
    })
  }
  next()
}
