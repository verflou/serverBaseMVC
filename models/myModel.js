//Modelo de ejemplo para alojar datos en una DB mongo
const mongoose = require("mongoose");

//Creación del Schema Post
const postSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Un post debe tener un nombre"],
    },
    apellido: {
        type: String,
        required: [true, "Un post debe tener un apellido"],
    },
    edad: {
        type: Number,
        required: [true, "Un post debe tener un año de edad"],
    }
});

//Creación del modelo Post
const Post = mongoose.model('Post', postSchema);
const name = new Post({ nombre: 'hola', edad: 29 ,apellido: 'suarez'});

module.exports = Post;
console.log(name.nombre,name.apellido,name.edad);

 