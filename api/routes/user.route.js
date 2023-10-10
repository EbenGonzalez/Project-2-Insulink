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
router.get('/:id', getOneUser)
router.get('/me', getProfile) //añadir middlewares
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)


module.exports = router