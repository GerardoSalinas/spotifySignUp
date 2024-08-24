const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

app.use(express.static('public')); //para usar middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({enxtended:true}));



app.get('/',(req, res) => {
    res.sendFile(__dirname + 'index.html');
});

app.post('/guardar',(req,res) => {
    res.send(`Guardar el usuario ${req.body.email}`);
})

app.listen(3000);
