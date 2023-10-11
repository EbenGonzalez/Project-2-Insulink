const Medical = require('../models/medical_info.model')
const User = require('../models/user.model')

async function getAllMedical(req, res) {
  try {
    const medical = await Medical.findAll(
      {
        where: req.query
      })
      if (medical) {
        return res.status(200).json(medical);
      } else {
        return res.status(404).send("No medical found");
      }
  } catch (error) {
    res.status(500).send(message.error)
  } 
}

async function getOneMedical(req, res) {
  try {
    const medical = await Medical.findByPk(req.params.id)

    if (medical) {
      return res.status(200).json(medical)
    } else {
      return res.status(404).send('Medical not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function createMedical(req, res) {
  try {
    const user = await User.findByPk(req.params.id)
    const medical = await Medical.create(req.body)
    await user.addMedical(medical)
    return res.status(200).json({ message: 'Medical created', medical: medical, user: user.firstName })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function updateMedical(req, res) {
  try {
    const medical = await Medical.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if (medical) {
     return res.status(200).json({ message: `Medical with ID ${req.params.id} has been updated`})
    } else {
      return res.status(404).send('Medical not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteMedical(req, res) {
  try {
    const medical = await Medical.destroy({
      where: {
        id: req.params.id
      }
    })
    if (medical) {
      return res.status(200).json(`Medical with ID ${req.params.id} deleted`)
    } else {
      return res.status(404).send('Medical not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOwnMedical(req,res){
	try {
		const medical=await Medical.findOne({
      where:{
        userId:res.locals.user.id
      }
    })
    if (medical) {
      return res.status(200).json({ message: 'This Is Your Medical Info', medical: medical})
    } else {
      return res.status(404).send('You have not medical Defined')
    }
	} catch (error) {
		res.json(error)
	}
}

async function updateOwnMedical(req, res) {
    try {
      const medical = await Medical.findOne({
        where: {
          userId: res.locals.user.id
        }
      })
      if (medical) {
        await medical.update(req.body)
        return res.status(200).json({ message: 'Yor Medical has been updated :)', medical: medical})
      } else {
        return res.status(404).send('Medical not found')
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  async function deleteOwnMedical(req, res) {
    try {
      const medical = await Medical.findOne({
        where: {
          userId: res.locals.user.id
        }
      })
      if (medical) {
        await medical.destroy()
        return res.status(200).json({ message: 'Yor Medical has been deleted'})
      } else {
        return res.status(404).send('Medical not found')
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  async function createOwnMedical(req, res) {
    try {
      const user = await User.findByPk(res.locals.user.id)
      if (user) {
        const medical = await Medical.create(req.body)
        await user.addMedical(medical)
        return res.status(200).json({ message: 'Yor Medical has been created', medical: medical})
      } else {
        return res.status(404).send('Medical not found')
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

module.exports = {
	getAllMedical,
	getOneMedical,
	createMedical,
	updateMedical,
	deleteMedical,
  getOwnMedical,
  updateOwnMedical,
  deleteOwnMedical,
  createOwnMedical
}