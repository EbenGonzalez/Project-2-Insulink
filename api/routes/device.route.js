const router = require('express').Router()
const { getAllDevices,getOneDevice,createDevice,updateDevice,deleteDevice,getOwnDevice,updateOwnDevice,deleteOwnDevice,createOwnDevice } =require ("../controllers/device.controller")
const{ checkAuth,checkAdmin,checkDoctor }=require("../middlewares/index")
const{ signup,login }=require("../controllers/auth.controller")

router.get('/me', checkAuth, getOwnDevice)
router.get('/', checkAuth, checkAdmin, getAllDevices)
router.get('/:id', checkAuth, checkAdmin, getOneDevice)
router.post('/', createDevice)
router.post('/me', checkAuth, createOwnDevice)
router.put('/me',checkAuth, updateOwnDevice)
router.put('/:id', checkAuth, checkAdmin, updateDevice)
router.delete('/me', checkAuth, deleteOwnDevice)
router.delete('/:id', deleteDevice)

module.exports = router