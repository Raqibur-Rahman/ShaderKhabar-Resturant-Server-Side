const express=require('express');
const app=express();
const port=5000;
const cors=require('cors');
const chefs=require('./data/chefData.json');

app.get('/',(req,res)=>{
    res.send("Assalaamu alaikum");
})

app.use(cors());
app.get('/chefs',(req,res)=>{
    res.send(chefs);
})

app.listen(port, ()=>{
    console.log('API is running on port 5000');
})