class MagicMethods:
    def __init__(self,string1):
        self.string1="First Name: "+string1
    
    def __add__(self,other):
        self.string1=self.string1+" Last Name: "+other
    
    def display(self):
        print(self.string1)

magicMethodObject=MagicMethods("Deval")
magicMethodObject.display()
print(magicMethodObject+" vora")