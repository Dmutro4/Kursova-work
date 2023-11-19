const groupService = require('../service/groupService')
const dutyService = require("../service/dutyService");

class GroupController {
    async create(req, res, next) {
        try {
            const {number} = req.body
            const groupData = await groupService.create(number)
            res
                .status(201)
                .send(groupData)
        } catch (e) {
            next(e);
        }
    }
    async getAll(req, res, next) {
        try {
            const groupData = await groupService.getAll()
            res
                .status(201)
                .send(groupData)
        } catch (e) {
            next(e);
        }
    }
    async getOne(req, res, next) {
        try {
            const id = req.params.id
            const groupData = await groupService.getOne(id)
            res
                .status(201)
                .send(groupData)
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new GroupController()