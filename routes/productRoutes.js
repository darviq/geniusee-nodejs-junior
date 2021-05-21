const express = require('express')
const router = express.Router()
const productControllers = require('../controllers/productControllers')
const { requireAsin } = require('../utils/requireAsin')
const { updateRequire } = require('../utils/updateRequire')

router.post('/', productControllers.post)
router.get('/', requireAsin, productControllers.get)
router.put('/', updateRequire, productControllers.upd)
router.delete('/', requireAsin, productControllers.del)

module.exports = router
