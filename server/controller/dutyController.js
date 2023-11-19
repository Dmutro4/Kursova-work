const dutyService = require('../service/dutyService')

class DutyController {
    async create(req, res, next) {
        try {
            const {date_of_substitution, groupId} = req.body
            const dutyData = await dutyService.create(date_of_substitution, groupId)
            res
                .status(201)
                .send(dutyData)
        } catch (e) {
            next(e);
        }
    }

    async getAll(req, res, next) {
        try {
            const dutyData = await dutyService.getAll()
            res
                .status(201)
                .send(dutyData)
        } catch (e) {
            next(e);
        }
    }

    async deleteById(req, res, next) {
        try {
            const id = req.params.id;
            const deletedDuty = await dutyService.deleteById(id);
            if (deletedDuty) {
                res.status(200).json({ message: 'Обов\'язок успішно видалено.' });
            } else {
                res.status(404).json({ message: 'Обов\'язок не знайдено.' });
            }
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new DutyController()