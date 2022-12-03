const express = require('express')
// dependencies handlers
const bookHandler = require('../handlers/book')

// router
const router = express.Router()

// endpoint
router.get('/books', bookHandler.getBooks)
router.get('/book/:id', bookHandler.getBookId)
router.post('/book', bookHandler.createBook)
router.put('/book/:id', bookHandler.updateBook)
router.delete('/book/:id', bookHandler.deleteBook)


module.exports = router