module.exports.updateRequire = (req, res, next) => {
  const { ASIN, sellerName, fullPrice, title, url, description, keyword } =
    req.body
  let requireMessage = ''
  if (!ASIN) {
    requireMessage += 'ASIN is required. '
  }
  if (!sellerName) {
    requireMessage += 'sellerName is required. '
  }
  if (!fullPrice) {
    requireMessage += 'fullPrice is required. '
  }
  if (!title) {
    requireMessage += 'title is required. '
  }
  if (!url) {
    requireMessage += 'url is required. '
  }
  if (!description) {
    requireMessage += 'description is required. '
  }
  if (!keyword) {
    requireMessage += 'keyword is required.'
  }
  requireMessage.trim()
  if (requireMessage) {
    return res.status(400).json({
      code: 400,
      message: requireMessage,
    })
  }
  next()
}
