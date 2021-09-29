import {AppModule} from "./AppModule";
import {NestExpressApplication} from "@nestjs/platform-express";
import {NestFactory} from "@nestjs/core";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {Client} from "pg";
import * as fs from "fs";

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    let client = await app.resolve(Client)

    // for(let i=1)

    let result = await client.query("")


    console.log(result);
}

bootstrap().catch(e => console.log(e.message))
