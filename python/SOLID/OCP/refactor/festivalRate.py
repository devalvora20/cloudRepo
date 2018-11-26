from abc import ABC, abstractmethod,ABCMeta
class FestivalRate(metaclass=ABCMeta):
    @abstractmethod
    def getRate(self):
        pass