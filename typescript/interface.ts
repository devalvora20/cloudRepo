interface ICustomer{
    firstName:String;
    lastName:String;
    balance:number;
}

function printC(customers:ICustomer[]):void{
    var c:ICustomer;
    for(c of customers){
        console.log("First Name:"+c.firstName);
        console.log("Last Name:"+c.lastName);
        console.log("Balance:"+c.balance);
        console.log("----------------");
    }
}

printC([{firstName:"deval",lastName:"vora",balance:200},{firstName:"dsad",lastName:"sdsd",balance:23}])