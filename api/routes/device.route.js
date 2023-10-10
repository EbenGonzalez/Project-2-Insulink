const router = require('express').Router()
const { getAllDevices,getOneDevice,createDevice,updateDevice,deleteDevice,getOwnDevice } =require ("../controllers/device.controller")
const{ checkAuth,checkAdmin,checkDoctor }=require("../middlewares/index")

router.get('/all', getAllDevices)
router.get('/:id', getOneDevice)
router.get('/me', checkAuth, getOwnDevice)
router.post('/', createDevice)
router.put('/:id', updateDevice)
router.delete('/:id', deleteDevice)

module.exports = router