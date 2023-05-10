
const {default : mongoose} = require('mongoose');
const models = require("../models/myModel")
const newmodel = new models({
    nombre: "joaquin",
    edad: "17"
  });

newmodel.save()
.then(() => {
    console.log("documento se guardo");
    mongoose.connection.close();
})
.catch ((error) =>{
    console.log(error);
    mongoose.connection.close();
})

exports.inicio = (req,res) => {
    res.status(200).render("index");
}