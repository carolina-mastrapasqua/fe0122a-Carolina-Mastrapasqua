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
var SonAccount = /** @class */ (function () {
    function SonAccount(balanceInit) {
        this.balanceInit = balanceInit;
    }
    SonAccount.prototype.oneDeposit = function (deposit1) {
        return this.balanceInit += deposit1;
    };
    SonAccount.prototype.oneWithdraw = function (withdrawal1) {
        return this.balanceInit -= withdrawal1;
    };
    return SonAccount;
}());
var figlio = new SonAccount(500);
figlio.oneDeposit(50);
figlio.oneWithdraw(70);
console.log(figlio);
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(balanceInit) {
        return _super.call(this, balanceInit) || this;
    }
    MotherAccount.prototype.twoDeposit = function (deposit2) {
        return this.balanceInit += deposit2;
    };
    MotherAccount.prototype.twoWithdraw = function (withdrawal2) {
        return this.balanceInit -= withdrawal2;
    };
    MotherAccount.prototype.addInterest = function () {
        return this.balanceInit = (this.balanceInit + (this.balanceInit / 100) * 10);
    };
    return MotherAccount;
}(SonAccount));
var madre = new MotherAccount(300);
madre.addInterest();
console.log(madre);
