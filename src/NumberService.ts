import {Inject, Injectable} from "@nestjs/common";
import {Client} from "pg";
import {Number} from "./types";

@Injectable()
export class NumberService {

    constructor(private readonly client: Client) {
    }


    async getList(from: Date, to: Date): Promise<Number[]> {
        let {rows} = await this.client.query('SELECT * from numbers')
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
