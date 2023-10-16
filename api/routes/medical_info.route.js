const router = require('express').Router()

const {
  getAllMedical,
  getOneMedical,
  createMedical,
  updateMedical,
  deleteMedical,
  getOwnMedical,
  updateOwnMedical,
  deleteOwnMedical,
  createOwnMedical
} = require("../controllers/medical_info.controller")

const {
  checkAuth,
  checkAdmin,
  checkDoctor } = require("../middlewares/index")

router.get('/me', checkAuth, getOwnMedical)//
router.get('/', checkAuth, checkDoctor, getAllMedical)//
router.get('/:id', checkAuth, checkDoctor, getOneMedical)//
router.post('/me', checkAuth, createOwnMedical)//
router.post('/:id', checkAuth, checkDoctor, createMedical)//
router.put('/me', checkAuth, updateOwnMedical)//
router.put('/:id', checkAuth, checkDoctor, updateMedical)//
router.delete('/me', checkAuth, deleteOwnMedical)//
router.delete('/:id', checkAuth, checkDoctor, deleteMedical)//

module.exports = router