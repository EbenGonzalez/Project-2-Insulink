const Device = require('../models/device.model')
const User = require('../models/user.model')

async function getAllDevices(req, res) {
  try {
    const devices = await Device.findAll(
      {
        where: req.query
      })
      if (devices) {
        return res.status(200).json(devices);
      } else {
        return res.status(404).send("No Devices found");
      }
  } catch (error) {
    res.status(500).send(message.error)
  } 
}

async function getOneDevice(req, res) {
  try {
    const device = await Device.findByPk(req.params.id)

    if (device) {
      return res.status(200).json(device)
    } else {
      return res.status(404).send('Device not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function createDevice(req, res) {
  try {
    const device = await Device.create(req.body)
    return res.status(200).json({ message: 'Device created', device: device })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function updateDevice(req, res) {
  try {
    const device = await Device.update(req.body, {
      returning: true,
      where: {
        id: req.params.id
      }
    })
    if (device) {
      return res.status(200).json('Device updated')
    } else {
      return res.status(404).send('Device not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteDevice(req, res) {
  try {
    const device = await Device.destroy({
      where: {
        id: req.params.id
      }
    })
    if (device) {
      return res.status(200).json('Device deleted')
    } else {
      return res.status(404).send('Device not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOwnDevice(req,res){
	try {
		const device=await Device.findOne({
      where:{
        userId:res.locals.user.id
      }
    })
    if (device) {
      return res.status(200).json({ message: 'This Is Your Device Info',device:device.serial_number})
    } else {
      return res.status(404).send('You have not Device Defined')
    }
	} catch (error) {
		res.json(error)
	}
}

async function updateOwnDevice(req, res) {
    try {
      const device = await Device.findOne({
        where: {
          userId: res.locals.user.id
        }
      })
      if (device) {
        await device.update(req.body)
        return res.status(200).json({ message: 'Yor Device has been updated :)',device:device.serial_number})
      } else {
        return res.status(404).send('Device not found')
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  async function deleteOwnDevice(req, res) {
    try {
      const device = await Device.findOne({
        where: {
          userId: res.locals.user.id
        }
      })
      if (device) {
        await device.destroy()
        return res.status(200).json({ message: 'Yor Device has been deleted'})
      } else {
        return res.status(404).send('Device not found')
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  async function createOwnDevice(req, res) {
    try {
      const user = await User.findByPk(res.locals.user.id)
      if (user) {
        const device = await Device.create(req.body)
        await user.setDevice(device)
        return res.status(200).json({ message: 'Yor Device has been created'})
      } else {
        return res.status(404).send('Device not found')
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

module.exports = {
	getAllDevices,
	getOneDevice,
	createDevice,
	updateDevice,
	deleteDevice,
  getOwnDevice,
  updateOwnDevice,
  deleteOwnDevice,
  createOwnDevice
}