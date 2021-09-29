import {Inject, Injectable} from "@nestjs/common";
import {Client} from "pg";
import {Number} from "./types";

@Injectable()
export class NumberService {

    constructor(private readonly client: Client) {
    }

    async getAvailable(from: string, to: string): Promise<Number[]> {
        let {rows} = await this.client.query(`
            select * from number where id not in (
                    select  "numberId" from booking 
                        where $1 between "from" and "to"
                         or "from" between $2 and $3
            )
        `, [from, to, from])
        return rows
    }

    report(from: Date, to: Date) {
        return [
            {
                id: 2,
                number: 2
            }
        ]
    }

}
