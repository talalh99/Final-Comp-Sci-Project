const express = require("express");
const router = express.Router();
const books = require(' ./books.json');
const { parse } = require("path");

router.get('/', (req, res) => {
    res.json(books);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json(books.filter((ele) => ele.id === parseInt(id)));
});

router.post('/', (req, res) => {
    const body = req.body;
    console.log(body);
    books.push(body);
    res.json({ message: "The book you have requested has been added "});
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const body = req.body;
    books.forEach((book, index) => {
        if (book.id === parseInt(id)) {
            books[index] = body;
        }
    });

    res.json({ message: `The book with ID ${id} has been updated` });
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    books.forEach((book, index) => {
        if (book.id === parseInt(id)) {
            books.splice(index);
        }
    });

    res.json({ message: `Book with id Number ${id} has been deleted` });
});

module.exports = router;