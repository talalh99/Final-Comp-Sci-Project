const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("<h1> Welcome to Talal's Book Inventory </h1>");
});

app.listen(3000, function (){
    console.log("Server started on Port 3000");
});

