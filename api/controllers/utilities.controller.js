const Medical = require('../models/medical_info.model')
const User = require('../models/user.model')

async function getOwnInsulin(req,res){
	try {
		const medical=await Medical.findAll({
      where:{
        userId:res.locals.user.id
      }
    })
    if (medical) {
        let insulin=0
        for(let i=0;i<medical.length;i++){
            insulin+=medical[i].basal_insulin+medical[i].bolus_insulin
        }
      return res.status(200).json({ message: 'This Is Your Total Insulin', insulin})
    } else {
      return res.status(404).send('You have not Medical Info Defined')
    }
	} catch (error) {
		res.json(error)
	}
}

async function getInsulin(req,res){
	try {
		const medical=await Medical.findAll({
      where:{
        userId:req.params.id
      }
    })
    if (medical) {
        let insulin=0
        for(let i=0;i<medical.length;i++){
            insulin+=medical[i].basal_insulin+medical[i].bolus_insulin
        }
      return res.status(200).json({ message: `This Is Patient ${req.params.id} Total Insulin`, insulin})
    } else {
      return res.status(404).send('You have not Medical Info Defined')
    }
	} catch (error) {
		res.json(error)
	}
}

async function getOwnRatio(req,res){
	try {
		const medical=await Medical.findAll({
      where:{
        userId:res.locals.user.id
      }
    })
    if (medical) {
        let totalCh=0
        let totalBolus=0
        for(let i=0;i<medical.length;i++){
            totalCh+=medical[i].breakfast_CH+medical[i].lunch_CH+medical[i].snack_CH+medical[i].dinner_CH+medical[i].extra_CH
            totalBolus+=medical[i].bolus_insulin
        }
        let ratio=totalBolus/(totalCh/10)
      return res.status(200).json(`You need ${ratio.toFixed(2)} insulin units for each 10 carbohydrates`)
    } else {
      return res.status(404).send('You have not Medical Info Defined')
    }
	} catch (error) {
		res.json(error)
	}
}

async function getRatio(req,res){
	try {
		const medical=await Medical.findAll({
      where:{
        userId:req.params.id
      }
    })
    if (medical) {
        let totalCh=0
        let totalBolus=0
        for(let i=0;i<medical.length;i++){
            totalCh+=medical[i].breakfast_CH+medical[i].lunch_CH+medical[i].snack_CH+medical[i].dinner_CH+medical[i].extra_CH
            totalBolus+=medical[i].bolus_insulin
        }
        let ratio=totalBolus/(totalCh/10)
      return res.status(200).json(`Patient needs ${ratio.toFixed(2)} insulin units for each 10 carbohydrates`)
    } else {
      return res.status(404).send('You have not Medical Info Defined')
    }
	} catch (error) {
		res.json(error)
	}
}

async function getOwnResistance(req,res){
	try {
		const medical=await Medical.findAll({
      where:{
        userId:res.locals.user.id
      }
    })
    if (medical) {
        let insulin=0
        for(let i=0;i<medical.length;i++){
            insulin+=medical[i].basal_insulin+medical[i].bolus_insulin
        }
        insulin=1800/insulin
      return res.status(200).json(`Your blood sugar drops by ${insulin.toFixed(0)} for every unit of insulin.`)
    } else {
      return res.status(404).send('You have not Medical Info Defined')
    }
	} catch (error) {
		res.json(error)
	}
}

async function getResistance(req,res){
	try {
		const medical=await Medical.findAll({
      where:{
        userId:req.params.id
      }
    })
    if (medical) {
        let insulin=0
        for(let i=0;i<medical.length;i++){
            insulin+=medical[i].basal_insulin+medical[i].bolus_insulin
        }
        insulin=1800/insulin
      return res.status(200).json(`Patient blood sugar drops by ${insulin.toFixed(0)} for every unit of insulin.`)
    } else {
      return res.status(404).send('You have not Medical Info Defined')
    }
	} catch (error) {
		res.json(error)
	}
}

async function getOwnCh(req,res){
	try {
		const medical=await Medical.findAll({
      where:{
        userId:res.locals.user.id
      }
    })
    if (medical) {
        let totalCh=0
        for(let i=0;i<medical.length;i++){
            totalCh+=medical[i].breakfast_CH+medical[i].lunch_CH+medical[i].snack_CH+medical[i].dinner_CH+medical[i].extra_CH
        }
      return res.status(200).json(`Your total carbohydrate consumption has been:${totalCh}gr.`)
    } else {
      return res.status(404).send('You have not Medical Info Defined')
    }
	} catch (error) {
		res.json(error)
	}
}

async function getCh(req,res){
	try {
		const medical=await Medical.findAll({
      where:{
        userId:req.params.id
      }
    })
    if (medical) {
        let totalCh=0
        for(let i=0;i<medical.length;i++){
            totalCh+=medical[i].breakfast_CH+medical[i].lunch_CH+medical[i].snack_CH+medical[i].dinner_CH+medical[i].extra_CH
        }
      return res.status(200).json(`Patient total carbohydrate consumption has been:${totalCh}gr.`)
    } else {
      return res.status(404).send('You have not Medical Info Defined')
    }
	} catch (error) {
		res.json(error)
	}
}

module.exports = {
	getOwnInsulin,
    getInsulin,
    getOwnRatio,
    getRatio,
    getOwnResistance,
    getResistance,
    getOwnCh,
    getCh
}