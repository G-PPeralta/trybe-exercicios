const express = require('express');
const BookController = require('../controllers/bookController');

const router = express.Router();

router.get('/', BookController.getAllBooks);
router.get('/:id', BookController.getBookById);
router.post('/', BookController.createNewBook);
router.post('/:id', BookController.outwriteBook);
router.delete('/:id', BookController.deleteBook);

module.exports = router;