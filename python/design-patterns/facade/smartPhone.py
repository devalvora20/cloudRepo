from abc import abstractmethod,ABCMeta
class SmartPhone(metaclass=ABCMeta):
    def modelName(self):
        pass
    def price(self):
        pass
