const mongoose = require("mongoose")

const AuthorsSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        max: 255,
    
    },
    cognome: {
        type: String,
        required: true,
        max: 255,
    },
    email: {
        type: String,
        required: true,
        max: 255,
    },
    birthdate: {
        type: String,
        required: true,

    },
    avatar: {
    type: String,
    require: true
},

}, {timestamps: true})

module.exports = mongoose.model("AuthorsModel", AuthorsSchema, "authors")