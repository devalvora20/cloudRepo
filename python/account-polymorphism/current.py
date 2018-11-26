from account import Account
class Current(Account):
    def __init__(self,name,number,balance):
        super().__init__(name,number,balance)

    def withdraw(self,amt):
        self._balance-=amt