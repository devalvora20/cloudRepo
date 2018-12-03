from samsung import Samsung
from windows import Windows
from iphone import IPhone
class MobileShop:
    iphone=None
    samsung=None
    windows=None
    
    def __init__(self):
        self.iphone=IPhone()
        self.samsung=Samsung()
        self.windows=Windows()

    def samsungSale(self):
        self.samsung.modelName()
        self.samsung.price()
	
    def iphoneSale(self):
        self.iphone.modelName()
        self.iphone.price()
	
    def windowsSale(self):
        self.windows.modelName()
        self.windows.price()