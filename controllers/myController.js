/*const models = require("../models/myModel"); // Importa el modelo de la colección

exports.consulta = (req, res) => {
    models.find({}, (err, resultados) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error en la consulta");
        }

        res.status(200).json(resultados);
    });
};*/
const mongoose = require('mongoose');

const kittySchema = new mongoose.Schema({
    name: String,
    edad: Number
  });

const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({ name: 'Silence', edad: 29 });
console.log(silence.name,silence.edad); // 'Silence'
 