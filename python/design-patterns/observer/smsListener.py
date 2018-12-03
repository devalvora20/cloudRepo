from accountListener import AccountListener
class SmsListener(AccountListener):
    def balanceChanged(self,account):
        print("SMS:",account.getName(),"your balance is",account.getBalance(),"for account number:",account.getNumber())