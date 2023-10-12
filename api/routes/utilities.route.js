const router = require('express').Router()
const { getOwnInsulin, getInsulin, getOwnRatio, getRatio, getOwnResistance,getResistance, getOwnCh, getCh} =require ("../controllers/utilities.controller")
const{ checkAuth,checkAdmin,checkDoctor }=require("../middlewares/index")

router.get('/insulin/me', checkAuth, getOwnInsulin )
router.get('/insulin/:id', checkAuth, checkDoctor,getInsulin )
router.get('/ratio/me', checkAuth, getOwnRatio )
router.get('/ratio/:id', checkAuth, checkDoctor, getRatio )
router.get('/resistance/me', checkAuth, getOwnResistance )
router.get('/resistance/:id', checkAuth, checkDoctor, getResistance)
router.get('/ch/me', checkAuth, getOwnCh )
router.get('/ch/:id', checkAuth, checkDoctor, getCh)


module.exports = router