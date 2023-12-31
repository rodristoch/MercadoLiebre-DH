const express = require("express");   //para requerir express

const path = require("path");   //para requerir path (para hacer un ruteo mas sencillo para express)


const app = express();   //ejecuto express

const port = process.env.PORT || 3030;
app.listen (port, () => console.log("Servidor corriendo en puerto ${port}"));   //levanto el servidor y lo pongo a escuchar


app.get("/", (req, res) => {
    
    res.sendFile(path.resolve(__dirname, "./views/home.html"));   //mando al root del sitio el archivo home.html q está dentro de la carpeta views

});

app.get("/register", (req, res) => {
    
    res.sendFile(path.resolve(__dirname, "./views/register.html"));  //mando a /register el archivo register.html q está dentro de la carpeta views

});

app.get("/login", (req, res) => {
    
    res.sendFile(path.resolve(__dirname, "./views/login.html"));   //mando a /login el archivo login.html q está dentro de la carpeta views

});

app.post("/login", (req, res) => {
    
    res.sendFile(path.resolve(__dirname, "./views/home.html"));          

});

app.post("/register", (req, res) => {
    
    res.sendFile(path.resolve(__dirname, "./views/home.html"));        

});


app.use(express.static(path.resolve(__dirname, "../public")));  //para hacer uso de la carpeta public


//console.log(path.resolve(__dirname, "../public"))             //para comprobar la ruta de la carpeta public

//console.log(path.resolve(__dirname, "./views/home.html"))     //para comprobar la ruta del archivo html dentro de carpeta views

