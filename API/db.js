const Sequelize = require('sequelize')
const FilmsModel = require('./models/FilmsTable')
const UsersModel = require('./models/UsersTable')
const AdminModel = require('./models/AdminTable')

const sequelize = new Sequelize('UBCLUOtdDM', 'UBCLUOtdDM', 'FKA55iKpal', {
    host: 'remotemysql.com',
    dialect:'mysql'
})

const Films = FilmsModel(sequelize, Sequelize)
const Users = UsersModel(sequelize, Sequelize)
const Admin = AdminModel(sequelize, Sequelize)

sequelize.sync({ force: false })
.then(() => {
    console.log("Tables synced")
})

module.exports = {
    Films,
    Users,
    Admin
}