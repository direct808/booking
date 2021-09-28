import {Module} from "@nestjs/common";
import {MainController} from "./MainController";
import {NumberService} from "./NumberService";
import {BookingService} from "./BookingService";
import {Client} from "pg";

@Module({
    imports: [
    ],
    providers: [
        NumberService,
        BookingService,
        {
            provide: Client,
            useFactory: async () => {
                const client = new Client({
                    user: "postgres",
                    password: "123"
                })
                await client.connect()
                return client
            }
        }
    ],
    controllers: [MainController],
})
export class AppModule {

}
