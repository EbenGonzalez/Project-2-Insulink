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
  deleteUser,
  updateOwnProfile
} = require("../controllers/user.controller")

router.get('/', getAllUsers)
router.get('/:id', getOneUser)
router.get('/me', checkAuth, getProfile) //añadir middlewares
router.post('/', createUser)
router.put('/me', checkAuth, updateOwnProfile)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)


module.exports = router