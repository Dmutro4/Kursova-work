const sequelize = require("../config/dataBase")
const {DataTypes} = require("sequelize")


const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: DataTypes.STRING, required: true},
    password: {type: DataTypes.STRING, required: true},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
})

const Cadet = sequelize.define('cadet', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    surname: {type: DataTypes.STRING, required: true},
    name: {type: DataTypes.STRING, required: true},
    lastname: {type: DataTypes.STRING, required: true},
    rank: {type: DataTypes.STRING, required: true},
})

const Group = sequelize.define('group', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    number: {type: DataTypes.INTEGER, required: true},
})

const Duty = sequelize.define('duty', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date_of_substitution: {type: DataTypes.DATE, required: true},
})


Group.hasMany(Cadet)
Cadet.belongsTo(Group)

Group.hasMany(Duty)
Duty.belongsTo(Group)



module.exports = {
    User,
    Cadet,
    Group,
    Duty
}