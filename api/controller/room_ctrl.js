const Room = require('../model/room');

class Roomctrl extends Room {
    constructor() {
            super();
        }
        // get all Rooms in the database
    async getRooms(req, res, next) {
            await Room.findAll().then((rooms) => {
                if (!rooms) {
                    return res.status(404).json({ result: false, data: [], message: 'not found', status: 404, });
                } else {
                    return res.status(200).json({ result: true, data: rooms, message: 'ok', status: 200, });
                }
            }).catch((err) => { next(err) });
        }
        // get Room by Id
    async getRoom(req, res, next) {
            await Room.findByPk(req.params.id).then((room) => {
                if (!room) {
                    return res.status(404).json({ result: false, data: [], message: 'not found', status: 404, });
                } else {
                    return res.status(200).json({ result: true, data: room, message: 'ok', status: 200, });
                }
            }).catch((err) => next(err));
        }
        // create room
    async createRoom(req, res, next) {
            await Room.create(req.body).then((room) => {
                if (!room) {
                    return res.status(404).json({ result: false, data: [], message: 'failed to create', status: 404, });
                } else {
                    return res.status(201).json({ result: true, data: room, message: 'ok', status: 201, });
                }
            }).catch((err) => next(err));
        }
        // update Room
    async updateRoom(req, res, next) {
            await Room.update(req.body, { where: { id: req.params.id } }, { returning: true }).then((room) => {
                if (!room) {
                    return res.status(404).json({ result: false, data: [], message: 'failed to update', status: 404, });
                } else {
                    return res.status(200).json({ result: true, data: room, message: 'ok', status: 200, });
                }
            }).catch((err) => next(err));
        }
        // delete room
    async deleteRoom(req, res, next) {
        try {
            await Room.destroy({ where: { id: req.params.id } }).then(() => {
                res.status(200).json({
                    result: true,
                    data: [],
                    message: 'romm delete successfully',
                    status: 200,
                });
            })

        } catch (err) {
            next(err);
        }
    }

};

module.exports = Roomctrl;