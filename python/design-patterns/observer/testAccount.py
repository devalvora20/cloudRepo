from account import Account
from smsListener import SmsListener
from emailListener import EmailListener
acc1 = Account(123, "Deval", 2500)
smsAlert = SmsListener()
emailAlert = EmailListener()
acc1.addObserver(smsAlert)
acc1.addObserver(emailAlert)
acc1.deposit(156)
acc1.withdraw(468)