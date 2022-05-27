export class PersonDto {
    constructor(
        public id: number,
        public age: number,
        public firstName: string,
        public lastName: string,
        public bookingCount: number,
    ) {
    }
}