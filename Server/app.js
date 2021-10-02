/* const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path'); */

import express from 'express';
import morgan from 'morgan';
import cors  from 'cors';
import path from 'path';

const app = express();

//conexión base de datos
const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/bookXchange';
const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(uri,options).then(
    ()=>{
        console.log('Conexión exitosa');
    },
    err=>{ 
        console.log(err);
     }
);

//middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, 'public')));

//rutas
/* app.get('/', function(req,res){
    res.send('Hola Mundo');
}); */
app.use('/api', require('./routes/user'));
app.use('/api/login', require('./routes/login'));
app.use('/api', require('./routes/books'));

const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

//Puerto
/* app.listen(3000, function(){
    console.log('Server Up');
}); */
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function(){
    console.log('Puerto actual: ' + app.get('puerto'));
})