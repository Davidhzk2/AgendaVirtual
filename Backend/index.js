// importar modulos
const express = require("express");
const mongoose = require("mongoose");

// varieble del proyecto
const app = express();
// que vamos a usar 
app.use(express.json());

// puerto a escuchar
const port = process.env.PORT || 3003;

app.listen(port, () =>
    console.log("el servidor esta corriendo en el puerto: "+ port)
);

// conexion a la base de datos
mongoose.connect("mongodb://127.0.0.1:27017/agendavirtual", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => console.log("Conexion a MongoDB: ON"))
.catch((error) => console.log("Error al conectar con Mongo"))


