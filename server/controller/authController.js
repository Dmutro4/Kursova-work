const ApiError = require('../error/apiError')
const authService = require('../service/authService')
const bcrypt = require("bcrypt");
const passport = require("passport");

class AuthController {
    async registration(req, res, next) {
        try {
            const {username, password, surname, name, lastname, rank} = req.body;
            const newUser = await authService.getUserByUsername(username);
            if (newUser) {
                return next(ApiError.BadRequest(`Користувач з таким username - ${username} вже створений`));
            }
            const hashPassword = await bcrypt.hash(password, 3);
            const user = await authService.createUser(username, hashPassword, surname, name, lastname, rank);
            res
                .status(201)
                .send(user)
        } catch (e) {
            next(e);
        }
    }

    async login(req, res, next) {
        passport.authenticate('local', {
        }, (err, user) => {
            if (err) {
                throw err
            }

            if (!user) {
                res.send("Invalid username or password")
                return
            }

            req.logIn(user, (err) => {
                if (err) {
                    throw err
                }

                res
                    .status(201)
                    .send(user)
            })
        })(req, res, next)
    }

    async logout(req, res, next) {
        try {
            req.session.destroy((err) => {
                if (err) {
                    res
                        .status(400)
                        .send("Failed to logout")
                    return
                }
                res
                    .status(200)
                    .clearCookie('connect.sid')
                    .send("Successfully logged out")
            })
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new AuthController()