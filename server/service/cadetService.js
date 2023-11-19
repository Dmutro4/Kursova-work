const {Cadet} = require("../model/db_models")

class CadetService {
    async create(surname, name, lastname, rank, groupId) {
        return await Cadet.create({surname, name, lastname, rank, groupId})
    }
}

module.exports = new CadetService()