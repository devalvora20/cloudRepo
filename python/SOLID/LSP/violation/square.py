from rectangle import Rectangle
class Square(Rectangle):
    def __init__(self,side):
        super().__init__(side,side)
	
    def setWidth(self,width):
        self._width=width
        self._height=width
	
    def setHeight(self,height):
        self._width=height
        self._height=height
