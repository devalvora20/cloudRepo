from logDecorator import LogDecorator
from abstractAccount import AbstractAccount
class Logger(LogDecorator,AbstractAccount):
    def __init__(self,acc1):
        super().__init__(acc1)
        self.acc=acc1
    def deposit(self, amount):
        print("before")
        self.acc.deposit(amount)
        print("After")