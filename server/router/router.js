const Router = require('express')
const router = new Router()
const authRouter = require('./authRouter')
const cadetRouter = require('./cadetRouter')
const groupRouter = require('./groupRouter')
const dutyRouter = require('./dutyRouter')


router.use('/auth', authRouter)
router.use('/cadets', cadetRouter)
router.use('/groups', groupRouter)
router.use('/duties', dutyRouter)




module.exports = router