const User = require('../model/user');
class UserCtrl extends User {
    constructor() {
            super();
        }
        // get all users
    async getUsers(req, res, next) {
            await User.findAll().then(users => {
                if (!users) {
                    return res.status(404).json({ result: false, data: [], message: 'not found', status: 404, });
                } else {
                    return res.status(200).json({ result: true, data: users, message: 'ok', status: 200, });
                }
            }).catch(err => next(err));
        }
        // get User by  id 
    async getUser(req, res, next) {
            await User.findByPk(req.params.id).then(user => {
                if (!user) {
                    return res.status(404).json({ result: false, data: [], message: 'not found', status: 404, });
                } else {
                    return res.status(200).json({ result: true, data: user, message: 'ok', status: 200, });
                }
            }).catch(err => next(err));
        }
        // create new user
    async createUser(req, res, next) {
            await User.create(req.body).then(user => {
                if (!user) {
                    return res.status(404).json({ result: false, data: [], message: 'Failed to create', status: 404, });
                } else {
                    return res.status(201).json({ result: true, data: user, message: 'ok', status: 201, });
                }
            }).catch(err => next(err));
        }
        // update user
    async updateUser(req, res, next) {
            await User.update(req.body, { where: { id: req.params.id } }, { returning: true }).then((user) => {
                if (!user) {
                    return res.status(404).json({ result: false, data: [], message: 'Failed to update', status: 404, });
                } else {
                    return res.status(200).json({ result: true, data: user, message: 'ok', status: 200, });
                }
            }).catch((err) => next(err));
        }
        // delete user
    async deleteUser(req, res, next) {
        const user = await User.destroy({ where: { id: req.params.id } }).then((err) => {
            if (err) {
                return res.status(404).json({ result: false, data: [], message: 'Failed to delete', status: 404, });
            } else {
                return res.status(200).json({ result: true, data: [], message: 'deleted successfully', status: 200, });
            }
        }).catch(err => next(err));
    }
}

module.exports = UserCtrl;