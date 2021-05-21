const express = require('express')
const router = express.Router()
const productControllers = require('../controllers/productControllers')
const { requireAsin } = require('../utils/requireAsin')

router.post('/', productControllers.post)
router.get('/', requireAsin, productControllers.get)
// router.update('/', controller.update)
router.delete('/', requireAsin, productControllers.del)

module.exports = router
