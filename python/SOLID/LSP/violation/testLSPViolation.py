from rectangle import Rectangle
from square import Square
def shouldNotChangeWidthIfHeightChanges(shape):
	beforeWidth=shape.getWidth()
	shape.setHeight(20)
	afterChangeWidth=shape.getWidth()
	print("Before Width = ",beforeWidth)
	print("After Changing the Height = ",afterChangeWidth)

print("Rectangle:")
rectangle=Rectangle(100, 50)
shouldNotChangeWidthIfHeightChanges(rectangle)
print("------------------------------------")
print("Square:")
square=Square(100)
shouldNotChangeWidthIfHeightChanges(square)