'use strict';
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    profile_pic: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (instance, option) => {
        return bcrypt.hash(instance.password, 10).then(result => {
            instance.password = result
          })
          .catch(err => {
            console.log('Error Hashing Password')
          })
      }
    },
    sequelize
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};