from savings import Savings
from current import Current
from account import Account
def printAccountSlip(account):
    print("Account Balance: ",account._balance)

savings1=Savings(123,"deval",1200)
print("Number of account holders:",Account.noOfAccountHolders)
current1=Current(456,"vora",2300)
print("Number of account holders:",Account.noOfAccountHolders)
printAccountSlip(savings1)
printAccountSlip(current1)
savings1.withdraw(20)
current1.withdraw(35)
printAccountSlip(savings1)
printAccountSlip(current1)