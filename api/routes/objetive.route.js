const router = require('express').Router()
const { getAllObjetives, getOneObjetive, createObjetive, updateObjetive, deleteObjetive, getOwnObjetive } =require ("../controllers/objetive.controller")
const{ checkAuth,checkAdmin,checkDoctor }=require("../middlewares/index")

router.get('/me', checkAuth, getOwnObjetive)//
router.get('/', checkAuth, checkDoctor, getAllObjetives)//
router.get('/:id', checkAuth, checkDoctor, getOneObjetive)//
router.post('/', checkAuth, checkDoctor, createObjetive)//
router.put('/:id',checkAuth, checkDoctor, updateObjetive)//
router.delete('/:id', checkAuth, checkDoctor, deleteObjetive)//

module.exports = router