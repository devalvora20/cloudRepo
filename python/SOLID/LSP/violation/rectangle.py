class Rectangle:
    _height=0
    _width=0
    def __init__(self,height,width):
        self._height=height
        self._width=width

    def getHeight(self):
        return self._height

    def setHeight(self,height):
        self._height=height

    def getWidth(self):
        return self._width

    def setWidth(self,width):
        self.width = width

    def calculateArea(self):
        return self._height*self._width