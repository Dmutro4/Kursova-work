const Router = require('express')
const router = new Router()
const cadetController = require('../controller/cadetController')


router.post('/', cadetController.create)
// router.get('/', cadetController.getAll)

module.exports = router