const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const Objetive = connection.define('objetive',
    {
      serial_number: {
        type: DataTypes.ENUM("good","medium","bad"),
      },
    },
    { timestamps: false }
  )
  
  module.exports = Objetive