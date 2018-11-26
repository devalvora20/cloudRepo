from urllib.request import urlopen
from loader import Loader
class URLLoader(Loader):
    employeeList=[]
    link = "https://swabhav-tech.firebaseapp.com/emp.txt"
    def load(self):
        readFile=urlopen(self.link)
        for line in readFile:
            a=str(line).strip( 'b,"' )            
            self.employeeList.append(a[:-4])
        self.employeeList[21]=self.employeeList[21]+"L,30"
        readFile.close()
        return self.employeeList