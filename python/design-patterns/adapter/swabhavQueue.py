class SwabhavQueue():    
    def __init__(self):
        self.__queue=[]
	
    def enqueue(self,e):
        self.__queue.append(e)
	
    def dequeue(self):
        return self.__queue.pop()
	
    def count(self):
        return len(self.__queue)

    def __iter__(self):
        return self.__queue.__iter__()