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
    async numbersGet(@Query("from") from: Date, @Query("to") to: Date,) {
        console.log(from, to);
        return this.numberService.getList(from, to)
    }

    @Post("booking")
    async bookingPost() {
        return this.bookingService.create()
    }

    @Get("report")
    async reportGet(@Query("from") from: Date, @Query("to") to: Date,) {
        console.log(from, to);
        return this.numberService.report(from, to)
    }

}
