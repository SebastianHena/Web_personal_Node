//Requerimos de "dotenv" para poder utilizar las variables de entorno
require('dotenv').config();
const { get } = require("env-var");

//Configuramos el puerto y la carpeta de los recursos estaticos
const envs = {
    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
}

//Exportamos la configuracion
module.exports = {
    envs
}