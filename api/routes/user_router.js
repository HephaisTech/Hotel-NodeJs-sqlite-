const router = require('express').Router();

const User = require('../controller/user_ctrl');
const UserCtrl = new User();

router.route('/').get(UserCtrl.getUsers).post(UserCtrl.createUser);

router.route('/:id').get(UserCtrl.getUser).put(UserCtrl.updateUser).delete(UserCtrl.deleteUser);

module.exports = router;