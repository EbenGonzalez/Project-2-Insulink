const Objetive = require('../models/objetive.model')
const User = require('../models/user.model')
const Medical = require('../models/medical_info.model')
const { Op } = require("sequelize")

async function getAllObjetives(req, res) {
    try {
        const objetives = await Objetive.findAll(
            {
                where: req.query
            })
        if (objetives) {
            return res.status(200).json(objetives)
        } else {
            return res.status(404).send("No Objetives found")
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
                id: res.locals.user.id,
                objetiveId: {[Op.not]: null}
            }
        })
        if (user) {
            const medical=await Medical.findAll({
                where:{
                  userId:res.locals.user.id
                },
                attributes: ["good_bg"]
            })
            let media=0
            for(let i=0;i<medical.length;i++){
                media+=medical[i].good_bg
            }
            media=media/medical.length
            if(media>=70){
                 res.status(200).sendFile("/public/images/bien.png")
                 
                }else if(media>=50){
                    return res.status(200).sendFile("/public/images/medio.png")
                }else{
                    return res.status(200).sendFile("/public/images/mal.png")
                }
        } else {
            return res.status(404).send('You have not Objetive Defined')
        }
    } catch (error) {
        res.json(error)
    }
}

async function getOneUserObjetive(req, res) {
    try {
        const user = await User.findOne({
            where: {
                id: req.params.id
            }
        })
        if (user) {
            const medical=await Medical.findAll({
                where:{
                  userId:req.params.id
                },
                attributes: ["good_bg"]
            })
            let media=0
            let objetiveId
            for(let i=0;i<medical.length;i++){
                media+=medical[i].good_bg
            }
            media=media/medical.length
            if(media>=70){
                objetiveId=1
                }else if(media>=50){
                objetiveId=2
                }else{
                objetiveId=3
                }
            const objetive = await Objetive.findByPk(objetiveId)
            return res.status(200).json(`Based on ${user.firstName} medical reports, his current status is: ${objetive.state} `)
        } else {
            return res.status(404).send('Objetive not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getAllUsersObjetive(req, res) {
    try {
        const user = await User.findAll({
            where: {
                objetiveId: {[Op.not]: null}
            }
        })
        if (user) {
            let allUsers=[]
            for(let i=0;i<user.length;i++){

            const medical=await Medical.findAll({
                where:{
                  userId:user[i].id
                },
                attributes: ["good_bg"]
            })
            let media=0
            let objetiveId
            for(let i=0;i<medical.length;i++){
                media+=medical[i].good_bg
            }
            media=media/medical.length
            if(media>=70){
                objetiveId=1
                }else if(media>=50){
                objetiveId=2
                }else{
                objetiveId=3
                }
            const objetive = await Objetive.findByPk(objetiveId)
            allUsers.push(`Based on ${user[i].firstName} medical reports, his current status is: ${objetive.state} `)
            }
            return res.status(200).json(allUsers)
        } else {
            return res.status(404).send('Objetive not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllObjetives,
    getOneObjetive,
    createObjetive,
    updateObjetive,
    deleteObjetive,
    getOwnObjetive,
    getOneUserObjetive,
    getAllUsersObjetive
}