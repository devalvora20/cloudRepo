from parser1 import Parser1
from analyzer import Analyzer
from fileLoader import FileLoader
from urlLoader import URLLoader
from employeeHeirarchy import EmployeeHeirarchy
analyzer=Analyzer(Parser1(FileLoader()))
print(analyzer.getMaxSal())
deptWiseList=analyzer.getDeptWiseGroup()
for key, val in deptWiseList.items():
	print(f"Employees in dept {key} : {val}")
desigWiseList=analyzer.getDesigWiseGroup()
for key, val in desigWiseList.items():
	print(f"No of {key} : {val}")
print("=============")
empHeirarchyObj=EmployeeHeirarchy(Parser1(FileLoader()))
empHeirarchyObj.buildHeirarchy()
ceo=empHeirarchyObj.getCEO()
empHeirarchyObj.displayReportees(ceo,0)