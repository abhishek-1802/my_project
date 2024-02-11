const path = require("path")
const express = require("express");
const app = express();
const port = 8000;


const Register = require("./models/register");
// const {json} = require("express")


const staticPath =  path.join(__dirname, '../public')

// app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(staticPath))

app.get("/", (req,res) => {
    res.send("hello form the server");
})


app.post("/", async (req,res) => {
    try {
        const member = await Register.findOneAndUpdate(
            { email: req.body.email }, // Search criteria
            { $set: req.body }, // Update or insert data
            { upsert: true, new: true } // Options: upsert - insert if not exists, new - return the modified document
        );

        const hogya = await member.save();
        res.status(201).sendFile(path.join(__dirname, '../public/index.html'));
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(port, () =>{
    console.log(`listening to port ${port}`)
})

