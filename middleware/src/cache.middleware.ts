import {Injectable, MiddlewareFunction, NestMiddleware} from "@nestjs/common";

const fs = require('fs');

@Injectable()
export class CacheMiddleware implements NestMiddleware {

    resolve(nivelDeLog: string): MiddlewareFunction {
        return (request, response, next) => {
            console.log('**** DESDE MIDDLEWARE CACHE ****');
            next(); // ERROR SI NO SE LLAMA
        };
    }
}