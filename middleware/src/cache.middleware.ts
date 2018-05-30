import {Injectable, MiddlewareFunction, NestMiddleware} from "@nestjs/common";

const fs = require('fs');

@Injectable()
export class CacheMiddleware implements NestMiddleware {

    resolve(): MiddlewareFunction {
        return (request, response, next) => {
            console.log('**** DESDE MIDDLEWARE CACHE ****');
            const nombreCookie = request.params.nombre;
            const existeCookie = request.cookies[nombreCookie];
            if (existeCookie) {
                console.log('EN CACHE');
            } else {
                // seteando la cookie 1) NOMBRE 2) VALOR
                response.cookie(nombreCookie, '12345');
                console.log('NO EN CACHE');
            }
            next();
        };
    }
}