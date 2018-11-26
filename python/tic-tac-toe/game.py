class Game:
    currentPlayer=0
    def __init__(self,players,analyzer,board):
        self.analyzer=analyzer
        self.board=board
        self.players=players

    def play(self,cellNo):
        self.currentPlayer+=1
        if(self.currentPlayer%2==0):
            if(self.board.cellSet(cellNo,self.players[1].mark)=="false"):
                self.currentPlayer-=1
        else:
            if(self.board.cellSet(cellNo,self.players[0].mark)=="false"):
                self.currentPlayer-=1