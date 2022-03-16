abstract class CalcTaxes {
    redditoannuolordo: number;
    tasseinps: number;
    tasseirpef: number;

    constructor(redditoannuolordo: number,
        tasseinps: number, tasseirpef: number) {
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef
    }

    abstract getUtiletasse(): number;
    abstract geTtasseinps(): number;
    abstract getTasseIrpef(): number;
    abstract getRedditoAnnuoNetto(): number;

}

class WorkerTaxes extends CalcTaxes {
    constructor(redditoannuolordo: number,
        tasseinps: number, tasseirpef: number) {
        super(redditoannuolordo, tasseinps, tasseirpef)
    }

    getUtiletasse(): number {
        return this.tasseinps + this.tasseirpef;
    }

    geTtasseinps(): number {
        return (this.tasseinps / this.redditoannuolordo) * 100
    }
    getTasseIrpef(): number {
        return (this.tasseirpef / this.redditoannuolordo) * 100
    }

    getRedditoAnnuoNetto(): number {
        return this.redditoannuolordo - (this.tasseinps + this.tasseirpef)
    }

}

let Worker1 = new WorkerTaxes(100000, 1000, 2000)
console.log(Worker1);


console.log(Worker1.getUtiletasse())
console.log(Worker1.geTtasseinps() + '%')
console.log(Worker1.getTasseIrpef() + '%')
console.log(Worker1.getRedditoAnnuoNetto())

//getTasseIrpef(): number {
//return (this.tasseirpef / this.redditoannuolordo) * 100}



let btn = document.getElementById("btn") as HTMLInputElement;
console.log(btn)


btn.addEventListener("click", function () {
    calcPerc()
    console.log(calcPerc())
})



const inputElement = document.getElementById("reddlordo") as HTMLInputElement;
let reddLordo = (document.getElementById("reddlordo") as HTMLInputElement).value;
let reddLordo1: number = Number(reddLordo)



const inputElement2 = document.getElementById("tasse-irpef") as HTMLInputElement;
let tasseIrpef = (document.getElementById("tasse-irpef") as HTMLInputElement).value;
let tasseIrpef1: number = Number(tasseIrpef)


let printResult = document.getElementById("print-result") as HTMLInputElement

function calcPerc() {

    return printResult.innerHTML = String(tasseIrpef1 / reddLordo1 * 100)
}
