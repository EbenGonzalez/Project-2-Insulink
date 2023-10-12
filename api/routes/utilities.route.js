const router = require('express').Router()
const { getOwnInsulin} =require ("../controllers/utilities.controller")
const{ checkAuth,checkAdmin,checkDoctor }=require("../middlewares/index")

router.get('/insulin/me', checkAuth, getOwnInsulin )
router.get('/', checkAuth, checkDoctor, )


module.exports = router