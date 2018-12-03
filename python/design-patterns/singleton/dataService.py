class DataService:
    __service=None
    __isServiceCreated=0
    def __init__(self):
        if(DataService.__isServiceCreated==0 or DataService.__service!=None):
            raise Exception("Cannot create an instance. This class is Singleton")

    @staticmethod
    def getInstance():
        DataService.__isServiceCreated=1
        if(DataService.__service==None):
            DataService.__service=DataService()
        return DataService.__service
	
    def doProcessing(self):
        print(str(id(self))+" is processing")