from abc import ABC, abstractmethod,ABCMeta
class AbstractClass(metaclass=ABCMeta):
    @abstractmethod
    def absMethod(self):
        pass