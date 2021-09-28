import {AppModule} from "./AppModule";
import {NestExpressApplication} from "@nestjs/platform-express";
import {NestFactory} from "@nestjs/core";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    const config = new DocumentBuilder()
        .setTitle('Booking')
        .setDescription('The Booking API description')
        .setVersion('1.0')
        .addTag('Booking')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    await app.listen(8080);
    console.log('Web server listening on port ' + 8080);
}

bootstrap().catch(e => console.log(e.message))
