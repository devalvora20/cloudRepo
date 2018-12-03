from abc import ABCMeta,abstractmethod
class AccountListener(metaclass=ABCMeta):
    @abstractmethod
    def balanceChanged(self,account):
        pass