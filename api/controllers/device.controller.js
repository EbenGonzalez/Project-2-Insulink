const Device = require('../models/device.model')

const { Op } = require('sequelize')

async function getAllDevices(req, res) {
  try {
    if (!Object.values(req.query).length) {
      const devices = await Device.findAll()
      if (devices) {
        return res.status(200).json(devices)
      } else {
        return res.status(404).send('No devices found')
      }
    } else {
      const devices = await Device.findAll({
        where: {
          [Op.and]: [
            req.query
          ]
        }
      })
      if (devices.length !== 0) {
        return res.status(200).json(devices)
      } else {
        return res.status(404).send('No matches found')
      }
    }
  } catch (error) {
    return res.status(500).send(error.message)
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
    if (device!== 0) {
      return res.status(200).json({ message: 'Device updated'})
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
		const user=await Device.findByPk(res.locals.user.id)
		res.status(200).json(device)
	} catch (error) {
		res.json(error)
	}
}

module.exports = {
	getAllDevices,
	getOneDevice,
	createDevice,
	updateDevice,
	deleteDevice,
    getOwnDevice
}