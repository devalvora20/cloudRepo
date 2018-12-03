class Product:
    def __init__(self,id,name,cost,discount):
        self.id = id
        self.name = name
        self.cost = cost
        self.discount = discount

    def __str__(self):
        return " Product ID:" + str(self.id) + " Product name:" + self.name+ " Cost:" + str(self.CalculateProductCost())

    def CalculateProductCost(self):
        return self.cost - (self.discount / 100) * self.cost

    def getId(self):
        return self.id

    def getName(self):
        return self.name

    def getCost(self):
        return self.cost

    def getDiscount(self):
        return self.discount