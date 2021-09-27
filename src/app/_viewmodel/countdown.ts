export class Countdown {
    private date: Date;

    private constructor(date: Date) {
        this.date = date;
    }

    public static to(date: Date) {
        return new Countdown(date);
    }
}
