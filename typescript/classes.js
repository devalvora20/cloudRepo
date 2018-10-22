var Account = /** @class */ (function () {
    function Account(accNumber, accName, accBalance) {
        this.accNumber = accNumber;
        this.accName = accName;
        this.accBalance = accBalance;
    }
    Account.prototype.deposit = function (money) {
        this.accBalance += money;
    };
    Account.prototype.withdraw = function (money) {
        this.accBalance -= money;
    };
    Object.defineProperty(Account.prototype, "accountNumber", {
        get: function () {
            return this.accNumber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "accountName", {
        get: function () {
            return this.accName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "accountBalance", {
        get: function () {
            return this.accBalance;
        },
        enumerable: true,
        configurable: true
    });
    return Account;
}());
var acc1 = new Account(101, "Account 1", 200);
console.log("Account Number: " + acc1.accountNumber);
console.log("Account Name: " + acc1.accountName);
console.log("Account Balance: " + acc1.accountBalance);
acc1.deposit(100);
console.log("After 100 deposit: ");
console.log("Account Balance: " + acc1.accountBalance);
acc1.withdraw(50);
console.log("After 50 withdraw: ");
console.log("Account Balance: " + acc1.accountBalance);
