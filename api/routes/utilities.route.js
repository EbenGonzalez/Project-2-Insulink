const router = require('express').Router()
const { getOwnInsulin, getInsulin} =require ("../controllers/utilities.controller")
const{ checkAuth,checkAdmin,checkDoctor }=require("../middlewares/index")

router.get('/insulin/me', checkAuth, getOwnInsulin )
router.get('/insulin/:id', checkAuth, checkDoctor,getInsulin )


module.exports = router