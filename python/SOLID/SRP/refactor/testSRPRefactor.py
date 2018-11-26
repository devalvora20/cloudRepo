from invoice import Invoice
from invoicePrinter import InvoicePrinter
invoice = Invoice(1, "Deval", 1000, 10)
printer=InvoicePrinter()
printer.printInvoice(invoice)