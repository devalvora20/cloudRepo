from worker import Worker
class Robot(Worker):
    def startWork(self):
        print("Robot started working")
    
    def stopWork(self):
        print("Robot stoped working")

    def startEating(self):
        print("Robot cannot eat")

    def stopEating(self):
        print("Robot cannot eat")