import {Injectable} from "@nestjs/common";
import {BookingCreateParams} from "./types";
import {Client} from "pg";

@Injectable()
export class BookingService {

    constructor(private readonly client: Client) {
    }

    async create(params: BookingCreateParams) {
        let sql = 'insert into booking ("from", "to", "numberId") values ($1, $2, $3)'
        let result = await this.client.query(sql, [params.from, params.to, params.numberId])
        console.log(result);
    }

}
