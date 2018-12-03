from account import Account
from logger import Logger
acc = Account(123, "Deval", 1000)
acc1 = Logger(acc)
acc.deposit(100)
acc1.deposit(100)