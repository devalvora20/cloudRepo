class TaxCalculator:
    def __init__(self,logger):
        self.logger=logger
    def calculate(self,salary,r):
        c = 0
        try:
            c=salary/r
        except Exception:
            self.logger.log("Exception Caught")
        else:
            return c