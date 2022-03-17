fetch('Abbigliamento.json')
    .then(function (res) { return res.json(); })
    .then(function (data) {
    data.forEach(function (item) {
        var cloth = new Clothes(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo);
        console.log(cloth);
        console.log("sconto da applicare: " + cloth.getsaldocapo() + " $");
        console.log("prezzo scontato: " + cloth.getacquistocapo() + " $");
    });
});
var Clothes = /** @class */ (function () {
    function Clothes(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    Clothes.prototype.getsaldocapo = function () {
        return this.prezzoivainclusa * this.saldo / 100;
    };
    Clothes.prototype.getacquistocapo = function () {
        return this.prezzoivainclusa - this.getsaldocapo();
    };
    return Clothes;
}());
var cloth1 = new Clothes(6, 5986, "primavera", "camicia", 1298, 2, "marrone", 20.50, 25.01, "magazzino", 26);
var cloth2 = new Clothes(7, 9999, "primavera", "gonna", 1266, 6, "beige", 13.80, 16.80, "negozio", 24);
var cloth3 = new Clothes(8, 3237, "estate", "pantalone", 1041, 4, "nero", 25.30, 30.90, "negozio", 50);
console.log(cloth1);
console.log("sconto da applicare: " + cloth1.getsaldocapo() + " $");
console.log("prezzo scontato: " + cloth1.getacquistocapo() + " $");
console.log(cloth2);
console.log("sconto da applicare: " + cloth2.getsaldocapo() + " $");
console.log("prezzo scontato: " + cloth2.getacquistocapo() + " $");
console.log(cloth3);
console.log("sconto da applicare: " + cloth3.getsaldocapo() + " $");
console.log("prezzo scontato: " + cloth3.getacquistocapo() + " $");
