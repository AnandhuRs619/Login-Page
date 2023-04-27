var express =require("express");
var router = express.Router();


const credential ={
    email: "ananthurs619@gmail.com",
    password: "anandhu123"
}

//login user
router.post('/login',(req,res)=>{
    const {email, password} = req.body;
    if(req.body.email==credential.email&&req.body.password==credential.password){
        
        req.session.user=req.body.email;
        res.redirect('/')

        // res.end("Login Successful")
    }else{
        
        res.redirect("/")
    }
})

//route for dashboard
// router.get('/dashboard',(req,res)=>{
//     if(req.session.user){
//         res.render('dashboard',{user:req.session.user})
//     }else{
//         res.send("Unauthorize User")
//     }
// })

//route for logout
router.get('/logout',(req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send("Error")
        }else{
            // res.render('base',{title:"Express",logout:"logout Successfully"})
            res.clearCookie("connect.sid");
            res.redirect("/")
        }
    })
})

module.exports=router;
