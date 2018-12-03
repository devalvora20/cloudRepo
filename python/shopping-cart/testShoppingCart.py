from customer import Customer
from lineItem import LineItem
from order import Order
from product import Product
import datetime
def CustomerHistory(customer):
    print(customer)
customer1 = Customer("Deval")
order = Order(datetime.datetime.now())
		
customer1.addOrder(order)
order.addToCart(LineItem(Product(23, "iphone4",10, 25),2))
order.addToCart(  LineItem(Product(21, "S9 EDGE",20, 25),3)) 
order2 =   Order(datetime.datetime.now()) 
customer1.addOrder(order2) 
order2.addToCart(  LineItem(  Product(23, "MI MAX 4",2, 25),2)) 
order2.addToCart(  LineItem(  Product(21, "Galax note 8",2, 25),3)) 
order2.addToCart(  LineItem(  Product(21, "Galax note 8",2, 25),9)) 		
CustomerHistory(customer1) 
