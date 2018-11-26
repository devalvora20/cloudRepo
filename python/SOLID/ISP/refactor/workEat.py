from abc import ABCMeta,abstractmethod
class WorkEat(metaclass=ABCMeta):
    @abstractmethod
    def startWork(self):
        pass
    
    @abstractmethod
    def stopWork(self):
        pass

    @abstractmethod
    def startEating(self):
        pass
        
    @abstractmethod
    def stopEating(self):
        pass