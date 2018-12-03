from autoFactory import AutoFactory
from bmw import BMW
class BMWFactory(AutoFactory):
    def make(self): 
        return BMW()