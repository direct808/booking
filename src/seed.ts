import {AppModule} from "./AppModule";
import {NestFactory} from "@nestjs/core";
import {Client} from "pg";
import * as faker from "faker";

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    let client = await app.resolve(Client)

    for (let i = 100; i < 199; i++) {
        let result = await client.query(`
            insert into number (title) values (${i})
        `)
        // console.log(result)
    }

    for (let i = 1; i < 100; i++) {
        let date1 = faker.date.between('2021-01-01', '2021-11-30').toISOString()
        let date2 = faker.date.between(date1, '2021-12-31').toISOString()
        let numberId = faker.datatype.number(100)
        console.log(numberId);
        let result = await client.query(`
            insert into booking ("from","to","numberId") values ('${date1}','${date2}' ,${numberId})
        `)
        // console.log(result)
    }
    await client.end()

}

bootstrap().catch(e => console.log(e.message))
