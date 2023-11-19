const cadetService = require('../service/cadetService')

class CadetController {
    async create(req, res, next) {
        try {
            const {surname, name, lastname, rank, groupId} = req.body
            const cadetData = await cadetService.create(surname, name, lastname, rank, groupId)
            res
                .status(201)
                .send(cadetData)
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new CadetController()