from abc import abstractmethod,ABCMeta
class AutoFactory(metaclass=ABCMeta):
    @abstractmethod
    def make(self):
        pass