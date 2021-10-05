import mongoose from "mongoose";

const uniqueValidator = require('mongoose-unique-validator');

const roles= {
    values: ['Admin', 'Usuario'],
    msg: '{VALUE} rol no válido' 
}

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {type: String, required:[true, 'Nombre Obligatorio'],  },
    email: {
        type: String,
        required: [true, 'Correo Requerido'],
        unique: true},
    password: {type: String, required:[true, 'Contraseña Requerida']},
    rol: {type: String, default: 'Usuario', enum: roles },
    active: { type: Boolean, default: true},
    date: {type: Date, default: Date.now}

});
userSchema.plugin(uniqueValidator, {message: 'Error: esperaba {PATH} único.'})

//eliminar password de respuesta

userSchema.methods.toJSON = function() {
    const obj = this.toObject();
    delete obj.password;
    return obj;
}

//convertir a modelo

const User = mongoose.model('User', userSchema)
export default User;