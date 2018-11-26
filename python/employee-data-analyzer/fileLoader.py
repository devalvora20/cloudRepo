from loader import Loader
from employee import Employee
class FileLoader(Loader):
	employeeList=[]
	def load(self):
		readFile=open("./employee-data-analyzer/dataFile.txt", "r")
		for line in readFile:
			self.employeeList.append(line)
		readFile.close()
		return self.employeeList