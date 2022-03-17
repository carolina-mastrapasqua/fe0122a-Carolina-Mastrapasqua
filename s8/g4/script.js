var User = /** @class */ (function () {
    function User(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    User.prototype.ricarica = function (x) {
        this.carica += x;
    };
    User.prototype.chiamata = function (y) {
        this.carica -= y * 0.2;
        this.numeroChiamate += this.numeroChiamate;
    };
    User.prototype.numero404 = function () {
        return this.carica;
    };
    User.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return User;
}());
var firstUser = new User(20, 5);
console.log(firstUser);
firstUser.ricarica(20);
console.log(firstUser);
console.log(firstUser.chiamata(40));
console.log(firstUser.numero404());
console.log(firstUser.getNumeroChiamate());
console.log(firstUser.azzeraChiamate());
