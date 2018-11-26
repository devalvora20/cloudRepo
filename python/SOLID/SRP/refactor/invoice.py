class Invoice:
    GST=0.05
    def __init__(self,number,name,cost,percentDiscount):
        self.number=number
        self.name=name
        self.cost=cost
        self.percentDiscount=percentDiscount

    def calculateDiscount(self):
        self.cost = self.cost - (self.cost * (self.percentDiscount / 100))
        return self.cost

    def calculateTax(self):
        return (self.cost * (self.GST))

    def totalCost(self):
        return self.calculateDiscount() + self.calculateTax()

    def getNumber(self):
        return self.number

    def setNumber(self,number):
        self.number = number

    def getName(self):
        return self.name

    def setName(self,name):
        self.name = name