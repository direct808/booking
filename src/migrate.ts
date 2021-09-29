import {AppModule} from "./AppModule";
import {NestExpressApplication} from "@nestjs/platform-express";
import {NestFactory} from "@nestjs/core";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {Client} from "pg";
import * as fs from "fs";

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    let client = await app.resolve(Client)
    let result = await client.query(fs.readFileSync("./migrate.sql").toString())
    console.log(result);
    await client.end()
}

bootstrap().catch(e => console.log(e.message))
