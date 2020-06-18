const express = require("express");
const app = express();

const nav = [
    {link:"/books",name:"Books"},
    {link:"/authors",name:"Authors"},
    {link:"/signup",name:"Sign Up"},
    {link:"/login",name:"LogIn"}
];

const booksRouter = require("./src/routes/bookRoutes")(nav)
const authorsRouter = require("./src/routes/authorRoutes")(nav)
const signupRouter = require("./src/routes/signupRoute")(nav)
const loginRouter = require("./src/routes/loginRoute")(nav)

app.use(express.static("./public"));
app.set("view engine","ejs");
app.set("views","./src/views");
app.use("/books",booksRouter);
app.use("/authors",authorsRouter);
app.use("/signup",signupRouter);
app.use("/login",loginRouter);


app.get("/",function(req,res){
    res.render("index",
    {
        nav,
        title:"Library"
    });
});

app.listen(8000,function(){
    console.log("The server has started at port 8000");
});