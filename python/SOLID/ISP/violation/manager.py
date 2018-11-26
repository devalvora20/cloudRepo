from worker import Worker
class Manager(Worker):
    def startWork(self):
        print("Manager started working")
    
    def stopWork(self):
        print("Manager stopped working")

    def startEating(self):
        print("Manager started eating")

    def stopEating(self):
        print("Manager stopped eating")