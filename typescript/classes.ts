class Account{
    private accNumber:number;
    private accName:String;
    private accBalance:number;

    constructor(accNumber:number,accName:String,accBalance:number){
        this.accNumber=accNumber;
        this.accName=accName;
        this.accBalance=accBalance;
    }

    deposit(money:number):void {
        this.accBalance+=money;
    }

    withdraw(money:number):void{
        this.accBalance-=money;
    }

    get accountNumber():Number{
        return this.accNumber;
    }

    get accountName():String{
        return this.accName;
    }

    get accountBalance():Number{
        return this.accBalance;
    }
}

let acc1=new Account(101,"Account 1",200);
console.log("Account Number: "+acc1.accountNumber)
console.log("Account Name: "+acc1.accountName)
console.log("Account Balance: "+acc1.accountBalance)
acc1.deposit(100);
console.log("After 100 deposit: ");
console.log("Account Balance: "+acc1.accountBalance)
acc1.withdraw(50);
console.log("After 50 withdraw: ");
console.log("Account Balance: "+acc1.accountBalance)