import express from "express";
const router = express.Router();

import Books from "../models/books";

const {verificarAuth,verificarAdmin} = require('../middlewares/auth');

//post agregar books
router.post('/new-book',verificarAuth, async(req, res)=>{
    const body = req.body;

    body.userId = req.user._id

    try {
        const bookDB = await Books.create(body);
        return res.json(bookDB);

    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrio un error',
            error
        })        
    }
});

//get obtener  todos los libros
router.get('/book', async(req, res)=>{
    try {
        const bookDB = await Books.find();
        res.json(bookDB)
        
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrio un error',
            error
        })          
    }
});

//get obtener libros por usuario
// router.get()

//delete book
router.delete('/book/:id', async(req, res)=>{
    const _id = req.params.id;
    try {
        const bookDB = await Books.findByIdAndDelete({_id});
        if(!bookDB){
            return res.status(400).json({
                msg: 'No se Encontró el id del libro'
            })
        }
        res.json(bookDB)
    } catch (error) {
        res.status(400).json({

            msg: 'Ocurrio un error',
            error
        })
    }
});

//put actualizar libro
router.put('/book/:id', async(req, res) =>{
    const _id = req.params.id;
    const body = req.body

    try {
        const bookDB = await Books.findByIdAndUpdate(_id, body, {new: true});
        return res.json(bookDB);
        
    } catch (error) {
        res.status(400).json({
            msg: 'Ocurrio un error',
            error
        })        
    }

});

module.exports = router;
