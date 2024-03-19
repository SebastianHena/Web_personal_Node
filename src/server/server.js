//Esta primera forma es como se utilizaba de forma antigua
//const express = require('express');
//const path = require('path');


//Esta segundo forma es de la manera actualizada
import express from 'express';
import path from 'path';


//Inicializamos el servidor
export const startServer = (options) => {
    const {port, public_path = 'public'} = options;
    console.log(port);
    console.log(public_path);


    //Declaramos la aplicacion
    const app = express();


    //Para utilizar los middelwares se utiliza la palabra "use"
    app.use(express.static(public_path));


    //Vamos a hacer la llamada al servidor desde cualquier url
    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`);
        res.sendFile(indexPath);
    })
    

    //Vamos a escuchar el servidor para que traiga las peticiones
    app.listen(port, () => {
        console.log(`http://localhost:${port}`);
        console.log(`Se esta escuchando desde el puerto ${port}`);
    })
}
