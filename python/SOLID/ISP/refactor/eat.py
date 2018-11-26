from abc import ABCMeta,abstractmethod
class Eat(metaclass=ABCMeta):
    @abstractmethod
    def startEat(self):
        pass
        
    @abstractmethod
    def stopEat(self):
        pass