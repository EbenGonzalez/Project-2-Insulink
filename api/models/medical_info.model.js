const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const Medical = connection.define('medical',
    {
      pump_model: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['Medtronic', 'Roche', 'Novalab']]
          }
      },
      basal_insulin: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      bolus_insulin: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      good_bg: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            max: 100,                 
            min: 0,   
      },
      },
      high_bg: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            max: 100,                 
            min: 0,   
      },
      },
      low_bg: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            max: 100,                 
            min: 0,   
      },
      },
      breakfast_CH: {
        type: DataTypes.INTEGER
      },
      lunch_CH: {
        type: DataTypes.INTEGER
      },
      snack_CH: {
        type: DataTypes.INTEGER
      },
      dinner_CH: {
        type: DataTypes.INTEGER
      },
      extra_CH: {
        type: DataTypes.INTEGER
      },
    },
    { timestamps: false }
  )
  
  module.exports = Medical