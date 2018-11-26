class Analyzer:
    parserObj=0
    employeeList=[]
    def __init__(self,parser):
        self.parserObj=parser
        self.employeeList=self.parserObj.parseToEmp()

    def getMaxSal(self):
        max=0
        maxName=""
        for employee in self.employeeList:
            if(int(employee.sal)>max):
                max=int(employee.sal)
                maxName=employee.name
        return "Employee Name:"+maxName+"has the maximum salary with Rs. "+str(max)
    
    def getDeptWiseGroup(self):
        deptEmployeeList={}
        for employee in self.employeeList:
            if(str(employee.dept) in deptEmployeeList):
                deptEmployeeList[str(employee.dept)]+=1
            else:
                deptEmployeeList[str(employee.dept)]=1
        return deptEmployeeList

    def getDesigWiseGroup(self):
        desigEmployeeList={}
        for employee in self.employeeList:
            if(str(employee.desig) in desigEmployeeList):
                desigEmployeeList[str(employee.desig)]+=1
            else:
                desigEmployeeList[str(employee.desig)]=1
        return desigEmployeeList