from employeeBO import EmployeeBO
class EmployeeHeirarchy:
    empBOList=[]
    indent=0
    def __init__(self,parserObj):
        self.empList=parserObj.parseToEmp()
    
    def buildHeirarchy(self):
        for emp in self.empList:
            emp1= EmployeeBO(emp.id,emp.name,emp.desig,emp.mgrId,emp.date,emp.sal,emp.commission,emp.dept)
            self.empBOList.append(emp1)
        for emp in self.empBOList:
            mgrId=emp.mgrId
            for reportee in self.empBOList:
                if(reportee.id==mgrId):
                    reportee.reportees.append(emp)

    def getCEO(self):
        for emp in self.empBOList:
            if(emp.desig=="'PRESIDENT'"):
                return emp
    
    def displayReportees(self,emp,indent):
        for x in range(indent*7):
            print('-', end='', flush=True)
        print(">",emp.name)
        for e in emp.reportees:
            self.indent+=1
            self.displayReportees(e,self.indent)
            self.indent-=1
