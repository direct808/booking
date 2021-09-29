import {Controller, Get, Post, Query} from "@nestjs/common";
import {NumberService} from "./NumberService";
import {BookingService} from "./BookingService";

@Controller()
export class MainController {

    constructor(
        private readonly numberService: NumberService,
        private readonly bookingService: BookingService,
    ) {
    }

    @Get("numbers")
    async numbersGet(@Query("from") from: string, @Query("to") to: string,) {
        return this.numberService.getAvailable(from, to)
    }

    @Post("booking")
    async bookingPost(@Query("from") from: string, @Query("to") to: string, @Query("numberId") numberId: number) {
        try {
            await this.bookingService.create({
                from,
                to,
                numberId,
            })
        } catch (e) {
            return {
                error: e.message
            }
        }
        return 'ok'
    }

    @Get("report")
    async reportGet(@Query("from") from: Date, @Query("to") to: Date,) {
        return this.numberService.report(from, to)
    }

}
