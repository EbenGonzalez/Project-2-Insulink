const router = require('express').Router()
const { getAllDevices,getOneDevice,createDevice,updateDevice,deleteDevice,getOwnDevice,updateOwnDevice } =require ("../controllers/device.controller")
const{ checkAuth,checkAdmin,checkDoctor }=require("../middlewares/index")
const{ signup,login }=require("../controllers/auth.controller")

router.get('/me', checkAuth, getOwnDevice)
router.get('/all', checkAuth, checkAdmin, getAllDevices)
router.get('/:id', checkAuth, checkAdmin, getOneDevice)
router.post('/', createDevice)
router.put('/:id', checkAuth, checkAdmin,updateDevice)
router.put('/me',checkAuth,updateOwnDevice)
router.delete('/:id', deleteDevice)

module.exports = router