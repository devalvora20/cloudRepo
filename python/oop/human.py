class Human:
    __name=""
    __height=""
    __weight=""
    count=0
    def __init__(self,name,height,weight):
        self.__name=name
        self.__height=height
        self.__weight=weight
        Human.count+=1

    @staticmethod
    def getHeadCount():
        return Human.count

    def __getName(self):
        return self.__name

    def __getHeight(self):
        return self.__height

    def __getWeight(self):
        return self.__weight

    def play(self):
        self.__weight-=1
        self.__height+=2

    def __str__(self):
        return ("Name is "+self.__name+"\nHeight is "+str(self.__height)+"\nWeight is "+str(self.__weight))

    def __eq__(self,other):
        if(self.name==other.name and self.height==other.height and self.weight==other.weight):
            return "the 2 objects ARE equal"
        else:
            return "the 2 objects are NOT equal"
    name=property(__getName)
    height=property(__getHeight)
    weight=property(__getWeight)