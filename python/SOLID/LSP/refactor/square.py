from polygon import Polygon
class Square(Polygon):
    side=0
    def __init__(self,side):
        self.side=side
	
    def setSide(self,side):
        self.side=side

    def getSide(self):
        return self.side
    
    def calculateArea(self):
        return self.side*self.side
