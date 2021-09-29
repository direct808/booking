import {Injectable} from "@nestjs/common";
import {BookingCreateParams} from "./types";
import {Client} from "pg";
import moment from "moment";

@Injectable()
export class BookingService {

    constructor(private readonly client: Client) {
    }

    async create(params: BookingCreateParams) {
        let days = moment(params.to).diff(moment(params.from), 'days')
        let price = 1000 * days

        if (days > 20) {
            price = price * 80 / 100
        } else if (days > 10) {
            price = price * 90 / 100
        }

        let weekDay = moment(params.from).isoWeekday()
        if (weekDay == 1 || weekDay == 4) {
            throw new Error("Въезд и выезд не могут попадать на понедельник и четверг")
        }

        let sql = 'insert into booking ("from", "to", "numberId", price) values ($1, $2, $3, $4)'
        let result = await this.client.query(sql, [params.from, params.to, params.numberId, price])
    }

}
