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
      return res.status(200).json({ message: 'This Is Your Total Insulin', insulin})
    } else {
      return res.status(404).send('You have not Medical Info Defined')
    }
	} catch (error) {
		res.json(error)
	}
}
module.exports = {
	getOwnInsulin,
    getInsulin
}