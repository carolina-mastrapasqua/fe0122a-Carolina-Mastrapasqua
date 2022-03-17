
fetch('Abbigliamento.json')
    .then(res => res.json())
    .then(data => {

        data.forEach((item: Clothes) => {

            let cloth = new Clothes(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore,
                item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo)

            console.log(cloth)
            console.log("sconto da applicare: " + cloth.getsaldocapo() + " $")
            console.log("prezzo scontato: " + cloth.getacquistocapo() + " $")

        })

    })

class Clothes {
    id: number
    codprod: number
    collezione: string
    capo: string
    modello: number
    quantita: number
    colore: string
    prezzoivaesclusa: number
    prezzoivainclusa: number
    disponibile: string
    saldo: number

    constructor(id: number, codprod: number, collezione: string, capo: string, modello: number, quantita: number,
        colore: string, prezzoivaesclusa: number, prezzoivainclusa: number, disponibile: string, saldo: number) {

        this.id = id
        this.codprod = codprod
        this.collezione = collezione
        this.capo = capo
        this.modello = modello
        this.quantita = quantita
        this.colore = colore
        this.prezzoivaesclusa = prezzoivaesclusa
        this.prezzoivainclusa = prezzoivainclusa
        this.disponibile = disponibile
        this.saldo = saldo

    }

    getsaldocapo(): number {
        return this.prezzoivainclusa * this.saldo / 100
    }

    getacquistocapo(): number {
        return this.prezzoivainclusa - this.getsaldocapo()
    }
}

let cloth1: Clothes = new Clothes(6, 5986, "primavera", "camicia", 1298, 2, "marrone", 20.50, 25.01, "magazzino", 26)
let cloth2: Clothes = new Clothes(7, 9999, "primavera", "gonna", 1266, 6, "beige", 13.80, 16.80, "negozio", 24)
let cloth3: Clothes = new Clothes(8, 3237, "estate", "pantalone", 1041, 4, "nero", 25.30, 30.90, "negozio", 50)

console.log(cloth1)
console.log("sconto da applicare: " + cloth1.getsaldocapo() + " $")
console.log("prezzo scontato: " + cloth1.getacquistocapo() + " $")
console.log(cloth2)
console.log("sconto da applicare: " + cloth2.getsaldocapo() + " $")
console.log("prezzo scontato: " + cloth2.getacquistocapo() + " $")
console.log(cloth3)
console.log("sconto da applicare: " + cloth3.getsaldocapo() + " $")
console.log("prezzo scontato: " + cloth3.getacquistocapo() + " $")