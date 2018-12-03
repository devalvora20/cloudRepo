from abc import abstractmethod,ABCMeta
class AbstractAccount(metaclass=ABCMeta):
    @abstractmethod
    def deposit(self):
        pass
    @abstractmethod
    def withdraw(self):
        pass