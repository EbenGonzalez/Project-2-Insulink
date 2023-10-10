const router = require('express').Router()

const {
checkAdmin,
checkAuth,
checkDoctor
} = require('../middlewares')

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
router.get('/me', checkAuth, getProfile) //añadir middlewares
router.post('/', createUser)
router.put('/:id', updateUser)
router.put('/me', checkAuth, updateUser)
router.delete('/:id', deleteUser)


module.exports = router