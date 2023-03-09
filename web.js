let express = require("express");

var app = express();
app.use(express.json())


const mongoose = require("mongoose");
const fruits = require("./model.js").fruits;
const DB_URI = "mongodb://mymongodb:27017/products";


mongoose.connect(DB_URI).then(() => {
    app.listen(3000,()=>{
        console.log("server is listening on port 3000")
    })
});

app.get("/" , (req,res) => {
    fruits.find({name: /apple/i})
      .then((myFruits) => {
        const totalQty = myFruits.reduce((acc, curr) => {
          return acc + curr.qty;
        }, 0);
        res.status(200).send(`<center><h1><p style="color: red;">The amount of apples: ${totalQty}</p></h1></center>`);
      })
      .catch((err) => res.status(400).send(err));
});

