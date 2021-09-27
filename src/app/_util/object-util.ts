export class ObjectUtil {

    public static deepClone<T extends any>(obj: T): T {
        return JSON.parse(JSON.stringify(obj));
    }

}
