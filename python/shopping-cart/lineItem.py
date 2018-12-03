class LineItem:
    def __init__(self,product,quantity):
        self.product=product
        self.quantity=quantity

    def __str__(self):
        return "\n" + self.product.__str__() + " Quantity:" + str(self.quantity)+ " Total Cost:" + str(self.CalculateTotalCost())

    def CalculateTotalCost(self):
        return self.quantity * self.product.CalculateProductCost()

    def getProduct(self):
        return self.product

    def setQuantity(self,quantity):
        self.quantity = quantity

    def getQuantity(self):
        return self.quantity