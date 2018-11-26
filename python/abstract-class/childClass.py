from abstractClass import AbstractClass
class ChildClass(AbstractClass):
    def __init__(self):
        print("child class created")

    def childClassMethod(self):
        print("child class method")