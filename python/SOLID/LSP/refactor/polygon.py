from abc import ABC,abstractmethod,ABCMeta
class Polygon(metaclass=ABCMeta):
    @abstractmethod
    def calculateArea(self):
        pass