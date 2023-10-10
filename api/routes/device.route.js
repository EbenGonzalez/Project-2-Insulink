const router = require('express').Router()
const { getAllDevices,getOneDevice,createDevice,updateDevice,deleteDevice } =require ("../controllers/device.controller")

router.get('/all', getAllDevices)
router.get('/:id', getOneDevice)
router.post('/', createDevice)
router.put('/:id', updateDevice)
router.delete('/:id', deleteDevice)

module.exports = router