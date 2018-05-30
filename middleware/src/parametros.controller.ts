import {Controller, Get, Req, Res} from "@nestjs/common";

@Controller('Parametros')
export class ParametrosController {

    @Get('cookie/:nombre')
    peekCookie(@Req() request, @Res() response) {
        const mensaje = `LISTA DE COOKIES: ${JSON.stringify(request.cookies)}`;
        console.log(mensaje);
        response.send(mensaje);
    }
}