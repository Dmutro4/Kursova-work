const {User} = require("../model/db_models")


class AuthService {
    async getUserByUsername (username) {
        return await User.findOne({where:{username}})
    }
    async createUser (username, hashPassword, surname, name, lastname, rank) {
        return await User.create({username, password: hashPassword, surname, name, lastname, rank});
    }
    async getUserById (id) {
        return await User.findByPk(id);
    }
    async getAll(){
        return await User.findAll()
    }
}

module.exports = new AuthService()