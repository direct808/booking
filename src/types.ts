export interface Number {
    id: number
    title: string
}

export interface BookingCreateParams {
    from: Date;
    to: Date;
    numberId: number;
}
