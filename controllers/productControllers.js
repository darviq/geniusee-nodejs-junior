const axios = require('axios')

let saved = {}

const post = async (req, res, next) => {
  try {
    const products = await axios
      .get(
        'https://api.apify.com/v2/datasets/z0PzhOM8YnDpNxPLw/items?token=ioRdCccgWATA4qfSt4nASYxkH'
      )
      .then(response => response.data)

    for (const product of products) {
      const asins = Object.keys(saved)
      const productObject = {
        sellerName: product.sellerName,
        fullPrice: product.fullPrice,
        title: product.title,
        url: product.url,
        description: product.description,
        keyword: product.keyword,
      }
      if (asins.find(asin => asin === product.ASIN)) {
        saved[product.ASIN].push(productObject)
      } else {
        saved[product.ASIN] = [productObject]
      }
    }
    return res.status(201).json({
      code: 201,
      products: saved,
    })
  } catch (err) {
    next(err)
  }
}

const get = async (req, res, next) => {
  try {
    const { ASIN } = req.body
    const asins = Object.keys(saved)
    if (asins.find(asin => asin === ASIN)) {
      return res.status(200).json({
        code: 200,
        product: saved[ASIN],
      })
    } else {
      return res.status(404).json({
        code: 404,
        message: 'Not found',
      })
    }
  } catch (err) {
    next(err)
  }
}

module.exports = {
  post,
  get,
}
