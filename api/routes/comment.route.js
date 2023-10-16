const router = require('express').Router()
const { getAllComments, getOneComment, createComment, updateComment, deleteComment, getOwnComment, updateOwnComment, deleteOwnComment, createOwnComment, getOwnCommentAuthor } = require("../controllers/comment.controller")
const { checkAuth, checkAdmin, checkDoctor } = require("../middlewares/index")

router.get('/inbox/me', checkAuth, getOwnComment)
router.get('/send/me', checkAuth, getOwnCommentAuthor)
router.get('/', checkAuth, checkDoctor, getAllComments)
router.get('/:id', checkAuth, checkDoctor, getOneComment)
router.post('/me', checkAuth, createOwnComment)
router.post('/', checkAuth, checkDoctor, createComment)
router.put('/me/:id', checkAuth, updateOwnComment)
router.put('/:id', checkAuth, checkDoctor, updateComment)
router.delete('/me/:id', checkAuth, deleteOwnComment)
router.delete('/:id', checkAuth, checkDoctor, deleteComment)

module.exports = router