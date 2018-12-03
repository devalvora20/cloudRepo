from abc import abstractmethod,ABCMeta
class Automobile(metaclass=ABCMeta):
    @abstractmethod
    def start(self):
        pass
    @abstractmethod
    def stop(self):
        pass