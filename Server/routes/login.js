const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');

import User from '../models/user';

// Hash Contraseña
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/', async(req, res) =>{

    const body = req.body;
    
    try {
        //evaluando email
        const userDB = await User.findOne({email: body.email})
        if(!userDB){
            return res.status(400).json({
                msg: 'Email no encontrado'
            })
        }

        //evaluando contraseña
        if(!bcrypt.compareSync(body.password, userDB.password)){
            return res.status(400).json({
                msg: 'contraseña incorrecta'
            })
        }

        //generar token
        const token = jwt.sign({
            data: userDB
        }, 'tomaTuPass', {expiresIn: 60 * 60 * 24 * 30});
        
        res.json({
            userDB,
            token
        })
        
    } catch (error) {
        return res.status(400).json({

            msg: 'Ocurrio un error',
            error
        })        
    }  
});

module.exports = router