const router = require('express').Router()

router.use('/comment', require('./comment.route'))
router.use('/device', require('./device.route'))
router.use('/medical', require('./medical_info.route'))
router.use('/objetive', require('./objetive.route'))
router.use('/user', require('./user.route'))

module.exports = router