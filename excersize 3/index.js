const express = require('express');
const app = express();
const path = require('path');
app.set('template engine',"ejs");

const filePath = path.join(__dirname,'/views/index.ejs')
const filePath1 = path.join(__dirname,'/views/products.ejs')


const products = [
    {
        name:"FAMAS",
        price:"1000$"
    },
    {
        name:"TAURAS",
        price:"500$"
    },
    {
        name:"BRETTA 92F",
        price:"50000$"
    },
    {
        name:"BRETTA M9",
        price:"50$"
    },
    {
        name:"GLOCK 17",
        price:"1500$"
    },
    {
        name:"GLOCK 16",
        price:"1500$"
    },
    {
        name:"DESERT EAGLE",
        price:"1500$"
    }
]

app.get('/',(req,res) => {
    const name = "Daksh"
    res.render(filePath,{name});
})

app.get('/products',(req,res) => {
    res.render(filePath1,{products});
})

app.listen(8000,(err) => {
    if(err){
        console.log("error connecting to server")
    } else {
        console.log("server connected at port 8000")
    }
})