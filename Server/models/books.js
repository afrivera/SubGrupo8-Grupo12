import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const estado = {
    values: ['Disponible', 'Proceso de Intercambio', 'Intercambiado'],
    msg:'{VALUE} estado no válido'
}

const bookSchema = new Schema({
    userId:{type: String},
    title:{type: String, maxlength:100, required: [true, 'Campo Obligatorio']},
    isbn: {type: String, required: [true, 'Campo Obligatorio']},
    imgStatus: String,
    author:{type: String, required:[true, 'Campo Obligatorio']},
    bookStatus: {type: String, default: 'Disponible', enum:estado},
    bookDescription: {type: String, maxlength:255},
    statusDescription: {type: String, maxlength:255},
    createAt:{type:Date, default: Date.now}

});

const Books = mongoose.model('Books', bookSchema);

export default Books;