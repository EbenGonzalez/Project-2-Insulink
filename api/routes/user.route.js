const router = require('express').Router()

const {
  getAllUsers,
  getOneUser,
  getProfile,
  createUser,
  updateUser,
  deleteUser
} = require("../controllers/user.controller")

router.get('/', getAllUsers)
router.get('/:userId', getOneUser)
router.get('/me', getProfile) //añadir middlewares
router.post('/:userId', createUser)
router.put('/:userId', updateUser)
router.delete('/:userId', deleteUser)


module.exports = router