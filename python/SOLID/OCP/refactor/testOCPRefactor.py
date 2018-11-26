from fixedDeposit import FixedDeposit
from newYear import NewYear
from holi import Holi
from normal import Normal
fixedDeposit=FixedDeposit(123, "Deval",10000 , 3, Holi())
print("Total interest=",fixedDeposit.calculateTotalInterest())