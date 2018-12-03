from abc import ABCMeta,abstractmethod
class HouseTemplate(metaclass=ABCMeta):
    def buildHouse(self):
        self.buildFoundation()
        self.buildPillars()
        self.buildWalls()
        self.buildWindows()
        print("House is built.\n")

    def buildWindows(self):
        print("Building Glass Windows")

    @abstractmethod
    def buildWalls(self):
        pass
    @abstractmethod
    def buildPillars(self):
        pass

    def buildFoundation(self):
        print("Building foundation")