const router = require('express').Router();
const Hotel = require('../controller/hotel_ctrl');
const HotelCtrl = new Hotel();
// route to create a new hotel and get Hotels
router.route('/').get(HotelCtrl.getHotels).post(HotelCtrl.createHotel);
// route to update and delete hotels with id
router.route('/:id').get(HotelCtrl.getHotel).put(HotelCtrl.updateHotel).delete(HotelCtrl.deleteHotel);

module.exports = router;