// dependencies models
const Book = require('../models/index').Book

// List Book
exports.getBooks = (req, res) => {
    Book.findAll()
        .then((books) =>
            // res.send(books) // print ke webpage
            res.status(200).json({ books })
        )
        .catch((err) =>
            // res.send(err)
            res.status(500).json({ message: 'Internal Server Error' })
        )
}

// Book By Id
exports.getBookId = (req, res) => {
    Book.findOne({
        where: { id: req.params.id }
    })
        .then((book) => {
            res.status(200).json({ book })
        })
        .catch((err) => {
            res.status(500).json({ message: 'Internal Server Error' })
        })
}

// Create Book
exports.createBook = (req, res) => {
    Book.create(req.body)
        .then((books) =>

            res.status(201).json({ message: 'Book created successfully' })
        )
        .catch((err) =>

            res.status(500).json({ message: 'Internal Server Error' })
        )
}

// Update Book
exports.updateBook = (req, res) => {
    Book.update({
        title: req.body.title,
        author: req.body.author,
        year: req.body.year
    }, {
        where: { id: req.params.id }
    })
        .then((book) =>
            res.status(201).json({ message: 'Book updated successfully' })
        )
        .catch((err) =>
            res.status(500).json({ message: 'Internal Server Error' })
        )
}

// Delete Book
exports.deleteBook = (req, res) => {
    Book.destroy({
        where: { id: req.params.id }
    })
        .then((books) =>
            res.status(200).json({ message: 'Book deleted successfully' })
        )
        .catch((err) =>
            res.status(500).json({ message: 'Internal Server Error' })
        )
}