from accountListener import AccountListener
class EmailListener(AccountListener):
    def balanceChanged(self,account):
        print("Email:",account.getName(),"your balance is",account.getBalance(),"for account number:",account.getNumber())