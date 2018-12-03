from abstractAccount import AbstractAccount
class Account(AbstractAccount):
    __number=0
    __name=""
    __balance=0
    def __init__(self,number,name,balance):
        self.__number=number
        self.__name=name
        self.__balance=balance
    def deposit(self,amount):
        self.__balance += amount
        print(self.getBalance())
    
    def withdraw(self,amount):
        self.__balance -= amount

    def getNumber(self):
        return self.__number

    def setNumber(self, number):
        self.__number = number

    def getName(self):
        return self.__name

    def setName(self,name):
        self.__name = name

    def getBalance(self):
        return self.__balance

    def setBalance(self,balance):
        self.__balance = balance