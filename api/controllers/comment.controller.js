const Comment = require('../models/comment.model')
const User = require('../models/user.model')

async function getAllComments(req, res) {
  try {
    const comments = await Comment.findAll(
      {
        where: req.query
      })
      if (comments) {
        return res.status(200).json(comments);
      } else {
        return res.status(404).send("No Comments found");
      }
  } catch (error) {
    res.status(500).send(error.message)
  } 
}

async function getOneComment(req, res) {
  try {
    const comment = await Comment.findByPk(req.params.id)

    if (comment) {
      return res.status(200).json(comment)
    } else {
      return res.status(404).send('Comment not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function createComment(req, res) {
  try {
    const user = await User.findByPk(req.params.id)
    const device = await Device.create(req.body)
    await user.setDevice(device)
    return res.status(200).json({ message: 'Device created', device: device })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function updateComment(req, res) {
  try {
    const comment = await Comment.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if (comment) {
     return res.status(200).json({ message: `Comment with ID ${req.params.id} has been updated`})
    } else {
      return res.status(404).send('Comment not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteComment(req, res) {
  try {
    const comment = await Comment.destroy({
      where: {
        id: req.params.id
      }
    })
    if (comment) {
      return res.status(200).json(`Comment with ID ${req.params.id} deleted`)
    } else {
      return res.status(404).send('Comment not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOwnComment(req,res){
	try {
		const comment=await Comment.findOne({
      where:{
        userId:res.locals.user.id
      }
    })
    if (comment) {
      return res.status(200).json({ message: 'This are all your comments'})
    } else {
      return res.status(404).send('You have not any comment already')
    }
	} catch (error) {
		res.json(error)
	}
}

async function updateOwnComment(req, res) {
    try {
      const comment = await Comment.findOne({
        where: {
          userId: res.locals.user.id
        }
      })
      if (comment) {
        await comment.update(req.body)
        return res.status(200).json({ message: 'Yor Comment has been updated :)'})
      } else {
        return res.status(404).send('Comment not found')
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  async function deleteOwnComment(req, res) {
    try {
      const comment = await Comment.findOne({
        where: {
          userId: res.locals.user.id
        }
      })
      if (comment) {
        await comment.destroy()
        return res.status(200).json({ message: 'Yor Comments has been deleted'})
      } else {
        return res.status(404).send('Comments not found')
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  async function createOwnComment(req, res) {
    try {
      const user = await User.findByPk(res.locals.user.id)
      if (user) {
        const device = await Device.create(req.body)
        await user.setDevice(device)
        return res.status(200).json({ message: 'Yor Device has been created',device:device.serial_number})
      } else {
        return res.status(404).send('Device not found')
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

module.exports = {
	getAllComments,
	getOneComment,
	createComment,
	updateComment,
    deleteComment,
    getOwnComment,
    updateOwnComment,
    deleteOwnComment,
    createOwnComment
}