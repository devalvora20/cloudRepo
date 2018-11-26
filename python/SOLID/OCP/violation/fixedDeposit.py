class FixedDeposit:
	def __init__(self,accountNumber,name,principle,years,festival):
		self.accountNumber=accountNumber
		self.name=name
		self.principle=principle
		self.years=years
		self.festival=festival
	
	def calculateTotalInterest(self):
		if(self.festival=="Holi"):
			return (self.principle*self.years*(8.5))/100
		if(self.festival=="New Year"):
			return (self.principle*self.years*(8))/100
		if(self.festival=="Normal"):
			return (self.principle*self.years*(7))/100
		return -1
	
	def getAccountNumber(self):
		return self.accountNumber
	
	def setAccountNumber(self,accountNumber):
		self.accountNumber = accountNumber
	
	def getName(self):
		return self.name

	def setName(self,name):
		self.name = name