from abstractAccount import AbstractAccount
class LogDecorator(AbstractAccount):

    _acc=None
    def __init__(self,acc1):
        self._acc=acc1

    def deposit(self,amount):
        self._acc.deposit(amount)

    def withdraw(self,amount):
        self._acc.withdraw(amount)