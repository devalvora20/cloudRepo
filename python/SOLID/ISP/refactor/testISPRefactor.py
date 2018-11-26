from manager import Manager
from robot import Robot
def atTheWorkStaion(worker):
	print("At the Work Station")
	worker.startWork()
	worker.stopWork()
		
def atTheCafeteria (worker):
	print("At the Cafeteria")
	worker.startEating()
	worker.stopEating()

manager=Manager()
robot=Robot()
atTheWorkStaion(manager)
atTheWorkStaion(robot)
		
atTheCafeteria(manager)
# atTheCafeteria(robot)