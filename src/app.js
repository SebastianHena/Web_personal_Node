//Esta primera forma es como se utilizaba de forma antigua
//const { envs } = require("./config/env");
//const { startServer } = require("./server/server");

//Esta segundo forma es de la manera actualizada
import { envs } from "./config/env.js";
import { startServer } from "./server/server.js";


//Desde aqui vamos a utilizar toda la configuracion e inicialización del servidor
const main = () =>{
   startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH
   })
}


//Aquí vamos a ejecutar el servidor
// Esta funcion anonima sera asincronica y aparte ejecutara a "main" siempre
(async() =>{
    main();
})()