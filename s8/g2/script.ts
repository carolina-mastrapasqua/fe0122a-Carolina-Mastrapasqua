
class SonAccount {

    balanceInit: number;


    constructor(balanceInit: number) {
        this.balanceInit = balanceInit;
    }
    oneDeposit(deposit1: number): number {
        return this.balanceInit += deposit1;
    }
    oneWithdraw(withdrawal1: number): number {
        return this.balanceInit -= withdrawal1;
    }

}

let figlio = new SonAccount(500)
figlio.oneDeposit(50);
figlio.oneWithdraw(70);

console.log(figlio);



class MotherAccount extends SonAccount {

    constructor(balanceInit: number) {
        super(balanceInit);
    }

    twoDeposit(deposit2: number): number {
        return this.balanceInit += deposit2;
    }
    twoWithdraw(withdrawal2: number): number {
        return this.balanceInit -= withdrawal2;
    }

    addInterest(): number {
        return this.balanceInit = (this.balanceInit + (this.balanceInit / 100) * 10);
    }
}

let madre = new MotherAccount(300);
madre.addInterest();
console.log(madre)
