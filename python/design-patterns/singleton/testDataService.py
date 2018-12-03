from dataService import DataService
service1 = DataService.getInstance()
service2 = DataService.getInstance()
service3=DataService()
service1.doProcessing()
service2.doProcessing()
service3.doProcessing()