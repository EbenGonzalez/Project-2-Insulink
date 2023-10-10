const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const Device = connection.define('device',
    {
      serial_number: {
        type: DataTypes.STRING,
        unique:true,
        allowNull: false
      },
    },
    { timestamps: false }
  )
  
  module.exports = Device