const Book = require('../model/book');

class BookCtrl extends Book {
    constructor() {
        super();
    }
    async getBooks(req, res, next) { // get all books
        await Book.findAll().then((books) => {
            if (!books) {
                return res.status(404).json({ result: false, data: [], message: 'not found', status: 404, });
            } else {
                return res.status(200).json({ result: true, data: books, message: 'ok', status: 200, });
            }
        }).catch(err => next(err));
    }
    async getBook(req, res, next) { // get book by id    
        await Book.findByPk(req.params.id).then((book) => {
            if (!book) {
                return res.status(404).json({ result: false, data: [], message: 'not found', status: 404, });
            } else {
                return res.status(200).json({ result: true, data: book, message: 'ok', status: 200, });
            }
        }).catch(err => next(err));
    }
    async createBook(req, res, next) { // create a new book
        await Book.create(req.body).then((book) => {
            if (!book) {
                return res.status(404).json({ result: false, data: [], message: 'Failed to create', status: 404, });
            } else {
                return res.status(201).json({ result: true, data: book, message: 'ok', status: 201, });
            }
        }).catch(err => next(err));
    }
    async updateBook(req, res, next) { // update book
        await Book.update(req.body, { where: { id: req.params.id } }, { returning: true }).then((book) => {
            if (!book) {
                return res.status(404).json({ result: false, data: [], message: 'Failed to update', status: 404, });
            } else {
                return res.status(200).json({ result: true, data: book, message: 'ok', status: 200, });
            }
        }).catch((err) => next(err));
    }

    async deleteBook(req, res, next) { // delete book 
        await Book.destroy({ where: { id: req.params.id } }).then((err) => {
            if (err) {
                return res.status(404).json({ result: false, data: [], message: 'Failed to delete', status: 404, });
            } else {
                return res.status(200).json({ result: true, data: [], message: 'deleted successfully', status: 200, });
            }
        }).catch(err => next(err));
    }
}


module.exports = BookCtrl;