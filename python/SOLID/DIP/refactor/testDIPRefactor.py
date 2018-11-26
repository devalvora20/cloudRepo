from taxCalculator import TaxCalculator
from xml import XML
from csv import CSV
tc=TaxCalculator(XML())
print("TAX:",tc.calculate(1000, 0))