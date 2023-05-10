
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const app = express();
const myRouter = require("./routes/myRouter");
;

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(morgan("dev"));

app.use(express.json());

app.use(express.static(path.join(__dirname,"public")));

//Agrego un enrutador compatible
app.use("/", myRouter);
module.exports = app;
