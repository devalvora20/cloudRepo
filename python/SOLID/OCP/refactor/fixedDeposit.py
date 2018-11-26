class FixedDeposit:
	def __init__(self,accountNumber,name,principle,years,festival):
		self.accountNumber=accountNumber
		self.name=name
		self.principle=principle
		self.years=years
		self.festival=festival
	
	def calculateTotalInterest(self):
		return (self.principle*self.years*(self.festival.getRate()))/100
		
	
	def getAccountNumber(self):
		return self.accountNumber
	
	def setAccountNumber(self,accountNumber):
		self.accountNumber = accountNumber
	
	def getName(self):
		return self.name

	def setName(self,name):
		self.name = name