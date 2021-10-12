import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const bookSchema = new Schema({
    title:{type: String, required: [true, 'Campo Obligatorio']},
    isbn: {type: String, required: [true, 'Campo Obligatorio']},
    img: { data: Buffer, contentType: String },
    author:{type: String, required:[true, 'Campo Obligatorio']},
    userId:{type: String}
});

const Books = mongoose.model('Books', bookSchema);

export default Books;