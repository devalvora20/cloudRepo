"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, phNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phNumber = phNumber;
    }
    Object.defineProperty(Customer.prototype, "custFirstName", {
        get: function () {
            return this.firstName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "custLastName", {
        get: function () {
            return this.lastName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "custPhNumber", {
        get: function () {
            return this.phNumber;
        },
        enumerable: true,
        configurable: true
    });
    return Customer;
}());
exports.Customer = Customer;
var Invoice = /** @class */ (function () {
    function Invoice(description) {
        this.description = description;
    }
    Object.defineProperty(Invoice.prototype, "invoiceDescription", {
        get: function () {
            return this.description;
        },
        enumerable: true,
        configurable: true
    });
    return Invoice;
}());
exports.Invoice = Invoice;
