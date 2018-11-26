class EmployeeBO:
    def __init__(self,id,name,desig,mgrId,date,sal,commission,dept):
        self.id=id
        self.name=name
        self.desig=desig
        self.mgrId=mgrId
        self.date=date
        self.sal=sal
        self.commission=commission
        self.dept=dept
        self.reportees=[]