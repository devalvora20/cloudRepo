from account import Account
class Savings(Account):
    def __init__(self,name,number,balance):
        super().__init__(name,number,balance)

    def withdraw(self,amt):
        self._balance-=amt