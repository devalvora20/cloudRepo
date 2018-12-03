from autoFactory import AutoFactory
from toyota import Toyota
class ToyotaFactory(AutoFactory):
    def make(self): 
        return Toyota()