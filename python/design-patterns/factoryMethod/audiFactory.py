from autoFactory import AutoFactory
from audi import Audi
class AudiFactory(AutoFactory):
    def make(self): 
        return Audi()