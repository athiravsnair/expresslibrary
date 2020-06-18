const express = require("express");
const authorsRouter = express.Router();

function arouter(nav){
var authors=[
    {
        name: "Paulo Coelho",
        books:["The Alchemist", "Brida", "Veronica Decides To Die", "The pilgrimage","The Zahir"],
        img:"paulocoelho.jpg"
    },
    {
        name: "Stephenie Meyer",
        books:["Twilight", "New Moon", "Eclipse", "Breaking Dawn", "The host"],
        img:"meyer.jpg"
    },
    {
        name: "Eckhart Tolle",
        books:["The Power of Now","A New Earth", "Stillness Speaks","Practicing the Power of Now","Oneness with All Life"],
        img:"tolle.jpg"
    },
    {
        name: "Robin Sharma",
        books:["The Monk who sold his Ferrari","Megaliving", "The 5AM Club","The Leader Who Had No Title","Discover Your Destiny"],
        img:"robin.jpg"
    },
    {
        name: "Alison Booth",
        books:["Stillwater Creek","A Perfect Marriage", "A Distant Land","The Philosopher's Daughters","The Indigo Sky"],
        img:"booth.jpg"
    }
]

authorsRouter.get("/",function(req,res){
    res.render("authors",
    {
        nav,
        title:"Library",
        authors
    });
});

authorsRouter.get("/:it",function(req,res){
    const it = req.params.it;
    res.render("author",
    {
        nav,
        title:"Library",
        author:authors[it]
    });
});
return authorsRouter;
}

module.exports = arouter;