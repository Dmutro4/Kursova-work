const {Group, Duty, Cadet} = require("../model/db_models")

class GroupService {
    async create(number) {
        return await Group.create({number})
    }

    async getAll() {
        return await Group.findAll({include:Duty})
    }
    async getOne(id) {
        return await Group.findByPk(id, {include:Cadet})
    }
}

module.exports = new GroupService()