class Customer:

    def __init__(self,name):
        self.name=name
        self.orders=[]

    def __str__(self):
    	return "Name: "+self.getName()+self.getOrder()
	
	
    def addOrder(self,order):
        self.orders.append(order)

    def getName(self):
        return self.name

    def getOrder(self):
        str = ""
        for o in self.orders:
            str += o.__str__()
        return str