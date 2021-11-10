export class CatItem {
    marca?: string;
    modello?: string;
    descrizione?: string;
    categoria?: string;
    potenza?: number;
    prezzo?: number;
    imagesPath?: string[];
    caratteristiche?: { property: string, value: string }[];
    noPrice?: boolean;
    noPriceLabel?: string;
    private displayedImagePath?: string;

    private constructor(marca: string, modello: string, descrizione: string, categoria: string, potenza: number, prezzo: number,
        noPriceLabel: string, imagesPath: string[] = [], caratteristiche: { property: string, value: string }[] = []) {
        this.marca = marca;
        this.modello = modello;
        this.descrizione = descrizione;
        this.categoria = categoria;
        this.potenza = potenza;
        this.prezzo = prezzo;
        this.imagesPath = imagesPath;
        this.caratteristiche = caratteristiche;
        this.changeDisplayedImagePath(this.imagesPath.length > 0 ? this.imagesPath[0] : null);
        this.noPrice = prezzo === null;
        this.noPriceLabel = noPriceLabel;
    }

    public static init(catItem: CatItem): CatItem {
        return new CatItem(catItem.marca, catItem.modello, catItem.descrizione, catItem.categoria, catItem.potenza,
            catItem.prezzo, catItem.noPriceLabel, catItem.imagesPath, catItem.caratteristiche);
    }

    public getTitle?(): string {
        return this.marca + ' ' + this.modello;
    }

    public getDisplayedImagePath?(): string {
        return this.displayedImagePath;
    }

    public onImageMouseOver?(): void {
        if (this.imagesPath.length > 1) {
            this.changeDisplayedImagePath(this.imagesPath[1]);
        } else {
            this.onImageMouseOut();
        }
    }

    public onImageMouseOut?(): void {
        this.changeDisplayedImagePath(this.imagesPath.length > 0 ? this.imagesPath[0] : null);
    }

    public changeDisplayedImagePath?(imagePath: string): void {
        this.displayedImagePath = imagePath;
    }

    public hasCaratteristiche?(): boolean {
        return this.caratteristiche && this.caratteristiche.length > 0;
    }

}
