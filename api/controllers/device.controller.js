const Device = require('../models/device.model')

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
      return res.status(404).send('Device not found')
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
      await device.update(req.body)
      if (device!== 0) {
        return res.status(200).json({ message: 'Yor Device have been updated :)',device:device.serial_number})
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
      await device.destroy()
      if (device!== 0) {
        return res.status(200).json({ message: 'Yor Device have been deleted :exclamation:'})
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
  deleteOwnDevice
}