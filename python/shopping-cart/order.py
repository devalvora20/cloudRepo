class Order:
    def __init__(self,date):
        self.date=date
        self.order=[]

    def __str__(self):
        return "\n"+str(self.date)+self.getLineItem()+" Final Cost:"+str(self.checkOutCost())

    def addToCart(self,lineItem):
        for l in self.order:
            p1=l.getProduct()
            p2=lineItem.getProduct()
            if(p1.getId()==p2.getId()):
                l.setQuantity(lineItem.getQuantity()+l.getQuantity())
                return
        self.order.append(lineItem)

    def checkOutCost(self):
        finalCost=0
        for l in self.order:
            finalCost+=l.CalculateTotalCost()
        return finalCost

    def getDate(self):
        return self.date
    
    def getLineItem(self):
        str=""
        for l in self.order:
            str+=l.__str__()
        return str