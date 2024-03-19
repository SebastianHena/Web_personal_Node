//Requerimos de "dotenv" para poder utilizar las variables de entorno
//Esta primera forma es como se utilizaba de forma antigua
//require('dotenv').config();
//const { get } = require("env-var");

//Esta segundo forma es de la manera actualizada
import env from 'dotenv';
import envar from "env-var";


env.config();


//Configuramos el puerto y la carpeta de los recursos estaticos
export const envs = {
    PORT: envar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envar.get('PUBLIC_PATH').default('public').asString()
}
