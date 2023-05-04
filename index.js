const express=require('express');
const app=express();
const port=5000;

app.get('/',(req,res)=>{
    res.send("Assalaamu alaikum");
})

app.listen(port, ()=>{
    console.log('API is running on port 5000');
})