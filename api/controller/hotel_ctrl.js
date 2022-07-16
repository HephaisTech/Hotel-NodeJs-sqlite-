const Hotel = require('../model/hotel');
const Room = require('../model/room');


class HotelCtrl extends Hotel {
    constructor() {
            super();
        }
        // get all  hotels from the database
    async getHotels(req, res, next) {
            await Hotel.findAll().then((hotels) => {
                if (!hotels) {
                    return res.status(404).json({ result: false, data: [], message: 'not found', status: 404, });
                } else {
                    return res.status(200).json({ result: true, data: hotels, message: 'ok', status: 200, });
                }
            }).catch((error) => { next(error); });
        }
        // get Hotel by id with each rooms
    async getHotel(req, res, next) {
            await Hotel.findByPk(req.params.id).then(async(hotel) => {
                if (!hotel) {
                    return res.status(404).json({ result: false, data: [], message: 'not found', status: 404, });
                } else {
                    await Room.findAll({ where: { hotelid: hotel.id } }).then((rooms) => {
                        if (!rooms) {
                            hotel.rooms = [];
                            return res.status(200).json({ result: true, data: hotel, message: 'ok', status: 200 });
                        } else {
                            hotel.rooms = rooms;
                            return res.status(200).json({ result: true, data: hotel, message: 'ok', status: 200 });
                        }
                    }).catch((err) => { next(error); });
                }
            }).catch((error) => { next(error); });
        }
        // create new Hotel
    async createHotel(req, res, next) {
        await Hotel.create(req.body).then((hotel) => {
            if (!hotel) {
                return res.status(404).json({ result: false, data: [], message: 'failed to create', status: 404, })
            } else {
                return res.status(201).json({ result: true, data: hotel, message: 'ok', status: 201 })
            }
        }).catch((err) => { next(err); });
    }

    async updateHotel(req, res, next) {
        await Hotel.update(req.body, { where: { id: req.params.id } }, { returning: true }).then((hotel) => {
            if (!hotel) {
                return res.status(404).json({ result: false, data: [], message: 'failed to update', status: 404, });
            } else {
                return res.status(200).json({ result: true, data: hotel, message: 'ok', status: 200 });
            }
        }).catch(err => { next(err); });
    }

    async deleteHotel(req, res, next) {
        await Hotel.destroy({ where: { id: req.params.id } }).then((err) => {
            if (err) {
                return res.status(404).json({ result: false, data: [], message: 'failed to delete', status: 404, });
            } else {
                return res.status(200).json({ result: true, data: [], message: 'delete successfully', status: 200, });
            }
        }).catch((err) => next(err));
    }
}

module.exports = HotelCtrl;