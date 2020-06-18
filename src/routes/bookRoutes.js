const express = require("express");
const booksRouter = express.Router();

function brouter(nav){
var books = [
    {
        title:"The Alchemist",
        author:"Paulo Coelho",
        genre:"Fantasy",
        img:"alchemist.jpg"
    },
    {
        title:"Twilight",
        author:"Stephenie Meyer",
        genre:"Fiction",
        img:"twilight.jpg"
    },
    {
        title:"The Power of Now",
        author:"Eckhart Tolle",
        genre:"Spiritual",
        img:"power.jpg"
    },
    {
        title:"Megaliving",
        author:"Robin Sharma",
        genre:"Self-Help",
        img:"mega.jpg"
    },
    {
        title:"Stillwater Creek",
        author:"Alison Booth",
        genre:"Fiction",
        img:"creek.jpg"
    }
]

booksRouter.get("/",function(req,res){
    res.render("books",
    {
        nav,
        title:"Library",
        books
    });
});

booksRouter.get("/:id",function(req,res){
    const id = req.params.id;
    res.render("book",
    {
        nav,
        title:"Library",
        book:books[id]
    });
});
return booksRouter;
};

module.exports = brouter;