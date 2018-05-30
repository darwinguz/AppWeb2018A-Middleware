import {Injectable, MiddlewareFunction, NestMiddleware} from "@nestjs/common";

const fs = require('fs');

@Injectable()
export class LogMiddleware implements NestMiddleware {

    resolve(nivelDeLog: string): MiddlewareFunction {
        return (request, response, next) => {
            const peticion = {
                baseUrl: request.baseUrl,
                hostname: request.hostname,
                subdomains: request.subdomains,
                ip: request.ip,
                method: request.method,
                originalUrl: request.originalUrl,
                path: request.path,
                protocol: request.protocol,
                headers: request.headers,
            };
            switch (nivelDeLog) {
                case 'archivo':
                    guardarEnArchivo(peticion);
                    break;
                case 'consola':
                    imprimirEnConsola(peticion);
                    break;
                case 'todo':
                    guardarEnArchivo(peticion);
                    imprimirEnConsola(peticion);
                    break;
                default:
                    console.log('ERROR: ¡Nivel de Log desconocido!')
            }
            console.log('**** DESDE MIDDLEWARE LOG ****', nivelDeLog);
            next(); // ERROR SI NO SE LLAMA
        };
    }
}

function guardarEnArchivo(peticion) {
    //writeFile: escribe una y otra vez desde 0
    //appendFile: agrega contenido al archivo
    fs.appendFile('logs.txt', '\n***PETICION EN ARCHIVO***\n', (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
    fs.appendFile('logs.txt', JSON.stringify(peticion), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });

}

function imprimirEnConsola(peticion) {
    console.log('***PETICION EN CONSOLA***');
    console.log(peticion);
}
