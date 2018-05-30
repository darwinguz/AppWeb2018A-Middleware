import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {LogMiddleware} from "./log.middleware";
import {CacheMiddleware} from "./cache.middleware";
import {ParametrosController} from "./parametros.controller";


@Module({
    imports: [],
    controllers: [AppController, ParametrosController],
    providers: [AppService],
})
export class AppModule implements NestModule {
    nivelDeLog = 'archivo';

    configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
        consumer
            .apply(LogMiddleware)
            .with(this.nivelDeLog)
            .forRoutes(
                AppController
            )
            .apply(CacheMiddleware)
            .forRoutes(
                ParametrosController
            )
    }
}
