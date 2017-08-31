'use strict'

const Sequelize = require('sequelize')
const db = require('../index')
const Student = require('./student')
module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: 'https://image.flaticon.com/sprites/new_packs/201550-education.png'
  }
})
