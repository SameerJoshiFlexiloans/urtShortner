const express = require('express');
const app = express();
const router = require('./routes');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(router);

app.listen(1337,()=>{
    console.log("Listening to port 1337");
})