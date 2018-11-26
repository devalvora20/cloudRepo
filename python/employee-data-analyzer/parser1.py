from employee import Employee
class Parser1:
    loaderObj=""
    employeeList=[]
    def __init__(self,loader):
        self.loaderObj=loader
	
    def parseToEmp(self):
        flag=0
        data=self.loaderObj.load()
        for emp1 in data:
            employee=emp1.split(",")
            empObj=Employee(employee[0],employee[1],employee[2],employee[3],employee[4],employee[5],employee[6],employee[7])
            for e in self.employeeList:
                flag=0
                if(e.id==empObj.id):
                    flag=1
                    break
            if(flag!=1):
                self.employeeList.append(empObj)
        return self.employeeList
