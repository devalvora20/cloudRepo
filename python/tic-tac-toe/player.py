class Player:
    name = ""
    mark = ""
    def __init__(self,player,name):
        self.name=name
        if(player==1):
            self.mark="X"
        else:
            self.mark="0"
