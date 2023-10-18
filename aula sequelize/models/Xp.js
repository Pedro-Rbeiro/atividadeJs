const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const User = require('./User')

const Experiences = db.define('Experiences', {
    empresa: {
        type: DataTypes.STRING,
        required: true
    },
    cargo:{
        type:DataTypes.STRING,
        required: true
    },
    descricao: {
        type: DataTypes.STRING,
    },
})

Experiences.belongsTo(User)

module.exports = Experiences