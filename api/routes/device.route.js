const router = require('express').Router()
const { getAllDevices,getOneDevice,createDevice,updateDevice,deleteDevice,getOwnDevice,updateOwnDevice,deleteOwnDevice,createOwnDevice } =require ("../controllers/device.controller")
const{ checkAuth,checkAdmin,checkDoctor }=require("../middlewares/index")
const{ signup,login }=require("../controllers/auth.controller")

router.get('/me', checkAuth, getOwnDevice)//
router.get('/', checkAuth, checkDoctor, getAllDevices)//
router.get('/:id', checkAuth, checkDoctor, getOneDevice)//
router.post('/me', checkAuth, createOwnDevice)//
router.post('/:id', checkAuth, checkDoctor, createDevice)//
router.put('/me',checkAuth, updateOwnDevice)//
router.put('/:id', checkAuth, checkDoctor, updateDevice)//
router.delete('/me', checkAuth, deleteOwnDevice)//
router.delete('/:id', checkAuth, checkDoctor, deleteDevice)//

module.exports = router