from xmlLogger import XMLLogger
from csvLogger import CSVLogger
class TaxCalculator:
    def __init__(self,logType):
        self.logType=logType

    def calculate(self,salary,r):
        c = 0
        try:
            c=salary/r
        except ZeroDivisionError:
            if(self.logType=="XML"):
                xmlLogger=XMLLogger()
                xmlLogger.log("Exception caught")
            elif(self.logType=="CSV"):
                csvLogger=CSVLogger()
                csvLogger.log("Exception caught")
        return c		