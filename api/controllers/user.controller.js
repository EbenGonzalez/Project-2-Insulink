const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/user.model')

async function getAllUsers(req, res) {
  try {
    const users = await User.findAll(
      {
        where: req.query
      })
      if (users) {
        return res.status(200).json(users)
      } else {
        return res.status(404).send("No Users found")
      }
  } catch (error) {
    res.status(500).send(message.error)
  } 
}

async function getOwnProfile(req, res) {
  try {
    const user = await User.findOne({
      where: {
        id: res.locals.user.id
      }
    })
    if (user){
      return res.status(200).json({message: 'This is your profile', user: user})
    } else {
      return res.status(404).send('You have not profile')
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function getOneUser(req, res) {
  try {
    const user = await User.findByPk(req.params.id)
    if(user) {
      return res.status(200).json(user)
    } else {
      return res.status(404).send("User not found1");
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function createUser(req, res) {
  try {
    const user = await User.create(req.body)
    return res.status(200).json({ message: "User created", user: user });
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function updateUser(req, res) {
  try {
    const user = await User.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    })
    if (user !== 0) {
      return res.status(200).json({ message: "User updated"})
    } else {
      return res.status(404).send("User not found")
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function updateOwnProfile(req, res) {
  try {
    const user = await User.findOne({
      where: {
        id: res.locals.user.id
      }
    })
    if (user) {
      await user.update(req.body)
      return res.status(200).json({ message: "User updated" })
    } else {
      return res.status(404).send('User not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteUser(req, res) {
  try {
    const user = await User.destroy({
      where: {
        id: req.params.id,
      },
    })
    if (user) {
      return res.status(200).json("User deleted")
    } else {
      return res.status(404).send("User not found")
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function deleteOwnProfile(req, res) {
  try {
    const user = await User.findOne({
      where: {
        id: res.locals.user.id
      }
    })
    if (user) {
      await user.destroy()
      return res.status(200).json({ message: "Your user has been deleted"})
    } else {
      return res.status(404).send("User not found")
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function changePassword(req, res) {
  try {
    const user = await User.findOne({
      where: {
        id: res.locals.user.id
      }
    })
    if (user){
      const comparePass = bcrypt.compareSync(req.body.currentPassword, user.password)
      if (comparePass) {
        const saltRounds= bcrypt.genSaltSync(process.env.ROUND)
      const hashedPassword = bcrypt.hashSync(req.body.newPassword, saltRounds)
      req.body.newPassword = hashedPassword
      user.password=hashedPassword
      user.save()
      return res.status(200).send("Your password has been changed successfully.")
      } else {
        return res.status(404).json('Error: Wrong Old password')
      }
    } else {
      return res.status(404).send('You have not profile')
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}



module.exports = {
  getAllUsers,
  getOneUser,
  getOwnProfile,
  createUser,
  updateUser,
  deleteUser,
  updateOwnProfile,
  deleteOwnProfile,
  changePassword,
}