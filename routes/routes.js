const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')

router.post('/', controller.post)
// router.get('/', controller.get)
// router.update('/', controller.update)
// router.delete('/', controller.delete)

module.exports = router
