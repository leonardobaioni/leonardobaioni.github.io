export class Locale {
    public static IT = 'it';
    public static EN = 'en';

    protected locode: string;

    private constructor(locode: string) {
        this.locode = locode;
    }
}
