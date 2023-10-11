const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const User = connection.define("user", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
      notNull: {
        msg: "Please enter your mail",
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false,
  },
  birth_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  debut_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  role: {
    type: DataTypes.ENUM,
    values: ['user', 'doctor', 'admin'],
    defaultValue: 'user'
  }
},
  {
    timestamps: false
  }
);


module.exports = User