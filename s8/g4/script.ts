interface Smartphone {
    carica: number;
    numeroChiamate: number;
    ricarica(x: number): void;
    chiamata(y: number): void;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate(): void;
}



class User implements Smartphone {
    carica: number;
    numeroChiamate: number;

    constructor(carica: number, numeroChiamate: number) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }

    public ricarica(x: number): void {
        this.carica += x;
    }
    public chiamata(y: number): void {
        this.carica -= y * 0.2;
        this.numeroChiamate += this.numeroChiamate;
    }

    public numero404(): number {
        return this.carica;
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    public azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }


}

let firstUser: User = new User(20, 5);

console.log(firstUser)
firstUser.ricarica(20)
console.log(firstUser)

console.log(firstUser.chiamata(40))
console.log(firstUser.numero404())
console.log(firstUser.getNumeroChiamate())
console.log(firstUser.azzeraChiamate())