const router = require('express').Router()

const {
checkAdmin,
checkAuth,
checkDoctor
} = require('../middlewares')

const {
  getAllUsers,
  getOneUser,
  getOwnProfile,
  createUser,
  updateUser,
  deleteUser,
  updateOwnProfile,
  deleteOwnProfile,
  changePassword,
} = require("../controllers/user.controller")

router.get('/', checkAuth, checkDoctor, getAllUsers)
router.get('/me', checkAuth, getOwnProfile) 
router.get('/:id', checkAuth, checkDoctor, getOneUser)
router.post('/', checkAuth, checkAdmin, createUser)
router.put('/me', checkAuth, updateOwnProfile)
router.put('/:id', checkAuth, checkAdmin, updateUser)
router.put('/password', checkAuth, changePassword)
router.delete('/me', checkAuth, deleteOwnProfile)
router.delete('/:id', checkAuth, checkAdmin, deleteUser)


module.exports = router