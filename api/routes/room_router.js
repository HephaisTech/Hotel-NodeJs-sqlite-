const router = require('express').Router();
const room = require('../controller/room_ctrl');
const RoomCtrl = new room();

router.route('/').get(RoomCtrl.getRooms).post(RoomCtrl.createRoom);

router.route('/:id').get(RoomCtrl.getRoom).put(RoomCtrl.updateRoom).delete(RoomCtrl.deleteRoom);


module.exports = router;