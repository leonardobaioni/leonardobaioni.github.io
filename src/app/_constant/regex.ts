export class Regex {
    public static DD_MM_YYYY_HH_MM = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}\s([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    public static DD_MM_YY_HH_MM = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{2}\s([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    public static DD_MM_YYYY = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    public static DD_MM_YY = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{2}$/;
}
