const express = require("express");
const router = express.Router();
const books = require(' ./books.json');
const { parse } = require("path");

router.get('/', (req, res) => {
    res.json(books);
});

router.get('/:id, (req, res') => {
    const { id } = req.params;
    res.json(books.filter((ele) => ele.id === parseInt(id)));
});

