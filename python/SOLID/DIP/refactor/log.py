from abc import abstractmethod,ABCMeta
class Log(metaclass=ABCMeta):
    @abstractmethod
    def log(self):
        pass