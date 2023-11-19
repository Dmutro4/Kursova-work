const {Duty} = require("../model/db_models")

class DutyService {
    async create(date_of_substitution, groupId) {
        return await Duty.create({date_of_substitution, groupId})
    }

    async getAll() {
        return await Duty.findAll()
    }

    async deleteById(id) {
        try {
            const deletedRows = await Duty.destroy({
                where: { id: id }
            });
            return deletedRows;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new DutyService()