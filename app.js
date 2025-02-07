const express=require('express');
const app=express();
const path=require('Path');
const usermodel=require('./models/user');
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.get('/',function(req,res){
    res.render("index");
})
app.get('/read',async function(req,res){
    let users=await usermodel.find();
    res.render("read",{users});
})

app.get('/delete/:id',async function(req,res){
    let users=await usermodel.findOneAndDelete({_id:req.params.id});
    res.redirect("/read");
})
app.post('/create',async function(req,res){
    let {name,image,passion}=req.body;

    let createdUser=await usermodel.create({
        name,
        image,
        passion
      })
      res.redirect("/read");
    
})
app.listen(3000)
