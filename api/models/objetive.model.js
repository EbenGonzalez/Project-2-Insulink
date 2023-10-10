const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const Objetive = connection.define('objetive',
    {
      state: {
        type: DataTypes.ENUM("good","medium","bad"),
      },
    },
    { timestamps: false }
  )
  
  module.exports = Objetive