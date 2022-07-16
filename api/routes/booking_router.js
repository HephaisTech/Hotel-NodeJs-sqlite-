const router = require('express').Router();
const Book = require('../controller/book_ctrl');
const BookCtrl = new Book();

router.route('/').get(BookCtrl.getBooks).post(BookCtrl.createBook);
router.route('/:id').get(BookCtrl.getBook).put(BookCtrl.updateBook).delete(BookCtrl.deleteBook);

module.exports = router;