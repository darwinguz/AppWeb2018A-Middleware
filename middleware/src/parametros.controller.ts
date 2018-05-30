import {Controller, Get, Req, Res} from "@nestjs/common";

@Controller('Parametros')
export class ParametrosController {

    @Get('cookie')
    peekCookie(@Req() request, @Res() response) {
        console.log(`LISTA DE COOKIES: ${request.cookies}`);
        const nombreCookie = 'cookie-wrad';
        const existeCookie = request.cookies[nombreCookie];
        if (existeCookie) {
            return response.send('EN CACHE');
        } else {
            // seteando la cookie 1) NOMBRE 2) VALOR
            response.cookie(nombreCookie, '12345');
            return response.send('NO EN CACHE');
        }
    }
}