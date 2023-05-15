const { default: mongoose } = require('mongoose');
const models = require('../models/myModel');

const newmodel = new models({
  nombre: 'joaquin',
  edad: '19',
});

newmodel
  .save()
  .then(() => {
    console.log('Documento guardado');
  })
  .catch((error) => {
    console.log(error);
  });

models
  .findByIdAndDelete('64628056be2403f643c8dc80')
  .then((modelEliminado) => {
    console.log('Documento eliminado correctamente', modelEliminado);
  })
  .catch((error) => {
    console.log(error);
  });

models
  .find()
  .then((documentos) => {
    console.log('Documentos encontrados:', documentos);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    mongoose.connection.close();
  });

exports.inicio = (req, res) => {
  res.status(200).render('index');
};
