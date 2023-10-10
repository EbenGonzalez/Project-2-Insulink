const router = require('express').Router()
const { getAllDevices,getOneDevice,createDevice,updateDevice,deleteDevice,getOwnDevice,updateOwnDevice } =require ("../controllers/device.controller")
const{ checkAuth,checkAdmin,checkDoctor }=require("../middlewares/index")
const{ signup,login }=require("../controllers/auth.controller")


router.get('/all', getAllDevices)
router.get('/:id', getOneDevice)
router.get('/me', checkAuth, getOwnDevice)
router.post('/', createDevice)
router.put('/:id', updateDevice)
router.put('/me',checkAuth,updateOwnDevice)
router.delete('/:id', deleteDevice)

module.exports = router