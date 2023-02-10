const dotenv = require('dotenv');
const express = require ('express');

const cookieparser=require("cookie-parser");
const app =express();

dotenv.config({path : './config.env'});
require('./db/conn');
const port = process.env.PORT;

const Message = require ('./models/msgSchema');
const Users = require('./models/userSchema');
const Enquire=require('./models/enquireSchema');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieparser());

app.get('/', (req,res)=>{
        res.send("Hello world");
})


app.post('/signup', async (req, res)=>{
    try {
        // Get body or Data
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
// const { username, email,password} = req.body;
        const createUser = new Users({
            username : username,
            email : email,
            password : password
        });

        // Save Method is Used to Create User or Insert User
        // But Before Saving or Inserting, Password will Hash 
        // Because of Hashing. After Hash, It will save to DB
        const created = await createUser.save();
        console.log(created);
        res.status(200).send("Registered");

    } catch (error) {
        res.status(400).send(error)
    }
})



app.post('/message', async (req, res)=>{
try{
    const name= req.body.name;
    const phone=req.body.phone;
    const email= req.body.email;
    const message=req.body.message;

    const sendMsg=new Message({
        name:name,
        phone:phone,
        email:email,
        message:message
    });
    const created=await sendMsg.save();
    console.log(created);
    res.status(200).send("Sent");
}
catch (error){
    res.status(400).send(error);
}
})

//Enquiry

app.post('/enquiry', async (req, res)=>{
    try{
        const username= req.body.username;
        const phone=req.body.phone;
        const city= req.body.city;
        const course=req.body.course;
    
        const sendEnquire=new Enquire({
            username:username,
            phone:phone,
            city:city,
            course:course
        });
        const created=await sendEnquire.save();
        console.log(created);
        res.status(200).send("Submit");
    }
    catch (error){
        res.status(400).send(error);
    }
    })
    
    
    

  
app.listen(port, ()=>{
    console.log("Server is Listening")
})