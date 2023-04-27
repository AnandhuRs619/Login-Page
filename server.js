const express = require('express');
const path = require('path');

const session =require("express-session");

const router = require("./router")

const app = express();

const port =process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs');

//load static assets

app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))


app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:false
}))

app.use('/route',router);

//Home route

app.get('/',(req,res)=>{
    if(req.session.user){
        res.render("dashboard")
    }else{
        
res.render('base',{title :"Login System"})
}
});

app.listen(port,()=>{console.log("Listening to the server on http://localhost:3000")});