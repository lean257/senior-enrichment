'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.STRING,
    get() {
      if(!this.getDataValue('image')) this.setDataValue('image', 'https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2016/11/Cock-A-Chon-puppies-for-sale-600x600.jpg')
    }
  }
})
