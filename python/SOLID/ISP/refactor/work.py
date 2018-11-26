from abc import ABCMeta,abstractmethod
class Work(metaclass=ABCMeta):
    @abstractmethod
    def startWork(self):
        pass
    
    @abstractmethod
    def stopWork(self):
        pass