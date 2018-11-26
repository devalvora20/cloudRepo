from abc import ABC,abstractmethod
class Account:
    __number=0
    __name=""
    _balance=0
    noOfAccountHolders=0
    def __init__(self,number,name,balance):
        self.__number=number
        self.__name=name
        self._balance=balance
        Account.noOfAccountHolders+=1

    def deposit(self,amt):
        self._balance+=amt
    
    @abstractmethod
    def withdraw(self):
        pass

    def __getNumber(self):
        return self.__number

    def __getName(self):
        return self.__name

    number=property(__getNumber)
    name=property(__getName)