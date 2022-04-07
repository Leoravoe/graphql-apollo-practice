const express = require('express');
const res = require('express/lib/response');



const app = express();

app.listen(4000,()=>{
    console.log('Listening to port 4000');
})

app.get('/',(req,res)=>{
    res.send("Hi There")
});