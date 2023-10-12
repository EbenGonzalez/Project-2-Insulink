const router = require('express').Router()
const { getOwnInsulin, getInsulin, getOwnRatio, getRatio} =require ("../controllers/utilities.controller")
const{ checkAuth,checkAdmin,checkDoctor }=require("../middlewares/index")

router.get('/insulin/me', checkAuth, getOwnInsulin )
router.get('/insulin/:id', checkAuth, checkDoctor,getInsulin )
router.get('/ratio/me', checkAuth, getOwnRatio )
router.get('/ratio/:id', checkAuth, checkDoctor, getRatio )


module.exports = router