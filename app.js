// todo framework express
const express = require('express')
const app = express()
const port = 3000

// const Book = require('./models/index').Book
const bookRoute = require('./routes/book')

// todo middleware /gateway
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(bookRoute)

// todo get list book
// app.get('/books', (req, res) => {
//     Book.findAll()
//         .then((books) =>
//             // res.send(books) // print ke webpage
//             res.status(200).json({ books })
//         )
//         .catch((err) =>
//             // res.send(err)
//             res.status(500).json({ message: 'Internal Server Error' })
//         )
// })

// todo get data book by ID
// app.get('/book/:id', (req, res) => {
//     Book.findOne({
//         where: { id: req.params.id }
//     })
//         .then((book) => {
//             res.status(200).json({ book })
//         })
//         .catch((err) => {
//             res.status(500).json({ message: 'Internal Server Error' })
//         })
// })


// todo created data book
// app.post('/book', (req, res) => {
//     Book.create(req.body)
//         .then((books) =>

//             res.status(201).json({ message: 'Book created successfully' })
//         )
//         .catch((err) =>

//             res.status(500).json({ message: 'Internal Server Error' })
//         )
// })

// todo update data book
// app.put('/book/:id', (req, res) => {
//     Book.update({
//         title: req.body.title,
//         author: req.body.author,
//         year: req.body.year
//     }, {
//         where: { id: req.params.id }
//     })
//         .then((book) =>
//             res.status(201).json({ message: 'Book updated successfully' })
//         )
//         .catch((err) =>
//             res.status(500).json({ message: 'Internal Server Error' })
//         )
// })

// todo deleted data book
// app.delete('/book/:id', (req, res) => {
//     Book.destroy({ where: { id: req.params.id } })
//         .then((books) =>
//             res.status(200).json({ message: 'Book deleted successfully' })
//         )
//         .catch((err) =>
//             res.status(500).json({ message: 'Internal Server Error' })
//         )
// })


// todo example http request
// app.get('/', (req, res) => {
//     res.send('Hello ExpressJS!')
// })

// app.get('/profile', (req, res) => {
//     let data = [
//         {
//             name: 'rifky',
//             gendre: 'male',
//             religion: 'islam'
//         },
//         {
//             name: 'christy',
//             gendre: 'female',
//             religion: 'christianity'
//         }
//     ]
//     res.send(data)
// })

// todo path parameter
// app.get('/:name', function (req, res) {
//     res.send('Good Morning ' + req.params.name)
// })

// todo running port server
app.listen(port, () => {
    console.log(`Server Up and Running on port ${port}`)
})