const myController = require("../controllers/myController");
const express = require("express");
const router = express.Router();

//Defino rutas y acciones de respuesta
router.route("/").get(myController.inicio);
router.route("/").get(myController.consulta);
router.route('/').get(mymodell.inicio)
module.exports = router;

