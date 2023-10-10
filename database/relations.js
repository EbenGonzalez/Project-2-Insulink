const User = require('../api/models/user.model')
const Comment = require('../api/models/comment.model')
const Device = require('../api/models/device.model')
const Medical = require('../api/models/medical_info.model')
const Objetive = require('../api/models/objetive.model')

function addRelationsToModels() {
  try {
    User.hasMany(Medical)
    Medical.belongsTo(User)

    User.hasMany(Comment)
    Comment.belongsTo(User)
    
    Objetive.hasMany(User)
    User.belongsTo(Objetive)

    User.hasOne(Device)
    Device.belongsTo(User)

    User.belongsToMany(User, {through: 'Patient_Doctor', as: 'patient', timestamps:false})
 

  } catch (error) {
    throw error
  }
}

module.exports = {addRelationsToModels}