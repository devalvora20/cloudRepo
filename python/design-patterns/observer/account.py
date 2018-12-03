class Account:
    def __init__(self,number,name,balance):
        self.number=number
        self.name=name
        self.balance=balance
        self.listeners=[]

    def deposit(self,amt):
        self.balance=self.balance+amt
        self.notifyAllListeners()

    def withdraw(self,amt):
        self.balance=self.balance-amt
        self.notifyAllListeners()

    def addObserver(self,listener):
        self.listeners.append(listener)

    def notifyAllListeners(self):
        for listener in self.listeners:
            listener.balanceChanged(self)

    def getName(self):
        return self.name

    def getBalance(self):
        return self.balance

    def getNumber(self):
        return self.number