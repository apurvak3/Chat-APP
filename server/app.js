import express from "express";
import users from "./"
const app = express();


app.get('/' ,(req , res) => {
    res.send("server is listening");
}) 

app.listen(3000 ,() => {
    console.log("server is listening to port 3000");

})