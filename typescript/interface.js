function printC(customers) {
    var c;
    for (var _i = 0, customers_1 = customers; _i < customers_1.length; _i++) {
        c = customers_1[_i];
        console.log("First Name:" + c.firstName);
        console.log("Last Name:" + c.lastName);
        console.log("Balance:" + c.balance);
        console.log("--------------------");
    }
}
printC([{ firstName: "deval", lastName: "vora", balance: 200 }, { firstName: "dsad", lastName: "sdsd", balance: 23 }]);
