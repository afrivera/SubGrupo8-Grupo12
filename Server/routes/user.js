import express  from "express";
const router = express.Router();

//Importamos modelo user
import User from '../models/user'

const {verificarAuth,verificarAdmin} = require('../middlewares/auth');


//Hash contraseña
const bcrypt = require ('bcrypt');
const saltRounds = 10;

//filtrar campos de put
const _ = require('underscore');

//agregar un usuario

router.post('/new-user', async(req, res) =>{

    const body = {
        name: req.body.name,
        email: req.body.email,
        rol: req.body.rol
    }
    body.password = bcrypt.hashSync(req.body.password, saltRounds);

    try {
        const userDB = await User.create(body);
        return res.json(userDB);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrio un error',
            error
        })        
    }
});

//get
router.get('/user/:id', async(req, res) =>{
    const _id = req.params.id;
    try {
        const userDB = await User.findOne({_id});
        res.json(userDB);

    } catch (error) {
        res.status(400).json({

            msg: 'Ocurrio un error',
            error
        })
        
    }
});


//get sin id

router.get('/user', async(req, res)=>{
    try {
        const userDB = await User.find();
        res.json(userDB)
        
    } catch (err) {
        res.status(400).json({

            msg: 'Ocurrio un error',
            err
        })
        
    }
})

//delete
router.delete('/user/:id', async(req, res)=>{
    const _id= req.params.id;
    try {
        const userDB = await User.findByIdAndDelete({_id});
        //validar si existe o no
        if(!userDB){
            return res.status(400).json({
                msg:'No se Encontró el Id Indicado'                
            })
        }
        res.json(userDB)
        
    } catch (err) {
        res.status(400).json({

            msg: 'Ocurrio un error',
            err
        })
    }
});

//actualizar datos put
router.put('/user/:id', [verificarAuth,verificarAdmin], async(req, res)=>{
    const _id= req.params.id;
    const body= _.pick(req.body, ['name', 'email', 'password','active']);

    if(body.password){
        body.password =  bcrypt.hashSync(req.body.password, saltRounds);
    }

    try {
        const userDB=await User.findByIdAndUpdate(_id, body,{ new: true, runValidators: true});
        return res.json(userDB);   

    } catch (error) {
        res.status(400).json({

            msg: 'Ocurrio un error',
            error
        })
        
    }
});

//exportamos configuración de express app
module.exports = router;