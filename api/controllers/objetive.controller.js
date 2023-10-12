const Objetive = require('../models/objetive.model')
const User = require('../models/user.model')

async function getAllObjetives(req, res) {
    try {
        const objetives = await Objetive.findAll(
            {
                where: req.query
            })
        if (objetives) {
            return res.status(200).json(objetives)
        } else {
            return res.status(404).send("No Devices found")
        }
    } catch (error) {
        res.status(500).send(message.error)
    }
}

async function getOneObjetive(req, res) {
    try {
        const objetive = await Objetive.findByPk(req.params.id)

        if (objetive) {
            return res.status(200).json(objetive)
        } else {
            return res.status(404).send('Objetive not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createObjetive(req, res) {
    try {
        const objetive = await Objetive.create(req.body)
        return res.status(200).json({ message: 'Objetive created' })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updateObjetive(req, res) {
    try {
        const device = await Objetive.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        if (device) {
            return res.status(200).json({ message: `Objetive with ID ${req.params.id} has been updated` })
        } else {
            return res.status(404).send('Objetive not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteObjetive(req, res) {
    try {
        const objetive = await Objetive.destroy({
            where: {
                id: req.params.id
            }
        })
        if (objetive) {
            return res.status(200).json(`Objetive with ID ${req.params.id} deleted`)
        } else {
            return res.status(404).send('Objetive not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOwnObjetive(req, res) {
    try {
        const user = await User.findOne({
            where: {
                id: res.locals.user.id
            }
        })
        if (user) {
            const objetive = await Objetive.findOne({
                where: {
                    id: user.objetiveId
                }
            })
            return res.status(200).json({ message: 'This Is Your Objetive Info', Objetive: objetive.state })
        } else {
            return res.status(404).send('You have not Objetive Defined')
        }
    } catch (error) {
        res.json(error)
    }
}



module.exports = {
    getAllObjetives,
    getOneObjetive,
    createObjetive,
    updateObjetive,
    deleteObjetive,
    getOwnObjetive
}