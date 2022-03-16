var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CalcTaxes = /** @class */ (function () {
    function CalcTaxes(redditoannuolordo, tasseinps, tasseirpef) {
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
    return CalcTaxes;
}());
var WorkerTaxes = /** @class */ (function (_super) {
    __extends(WorkerTaxes, _super);
    function WorkerTaxes(redditoannuolordo, tasseinps, tasseirpef) {
        return _super.call(this, redditoannuolordo, tasseinps, tasseirpef) || this;
    }
    WorkerTaxes.prototype.getUtiletasse = function () {
        return this.tasseinps + this.tasseirpef;
    };
    WorkerTaxes.prototype.geTtasseinps = function () {
        return (this.tasseinps / this.redditoannuolordo) * 100;
    };
    WorkerTaxes.prototype.getTasseIrpef = function () {
        return (this.tasseirpef / this.redditoannuolordo) * 100;
    };
    WorkerTaxes.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoannuolordo - (this.tasseinps + this.tasseirpef);
    };
    return WorkerTaxes;
}(CalcTaxes));
var Worker1 = new WorkerTaxes(100000, 1000, 2000);
console.log(Worker1);
console.log(Worker1.getUtiletasse());
console.log(Worker1.geTtasseinps() + '%');
console.log(Worker1.getTasseIrpef() + '%');
console.log(Worker1.getRedditoAnnuoNetto());
//getTasseIrpef(): number {
//return (this.tasseirpef / this.redditoannuolordo) * 100}
var btn = document.getElementById("btn");
console.log(btn);
btn.addEventListener("click", function () {
    calcPerc();
    console.log(calcPerc());
});
var inputElement = document.getElementById("reddlordo");
var reddLordo = document.getElementById("reddlordo").value;
var reddLordo1 = Number(reddLordo);
var inputElement2 = document.getElementById("tasse-irpef");
var tasseIrpef = document.getElementById("tasse-irpef").value;
var tasseIrpef1 = Number(tasseIrpef);
var printResult = document.getElementById("print-result");
function calcPerc() {
    return printResult.innerHTML = String(tasseIrpef1 / reddLordo1 * 100);
}
