from board import Board
class ResultAnalyzer:
    result="Inprogress"
    win=0
    n=""
    def __init__(self,b):
        self.board=b
	
    def getResult(self):
        return self.result

    def getWinner(self):
        return self.win

    def checkResult(self):
        if(self.board.cells[0].getValue()!=self.n and self.board.cells[1].getValue()!=self.n and self.board.cells[2].getValue()!=self.n and self.board.cells[3].getValue()!=self.n and self.board.cells[4].getValue()!=self.n and self.board.cells[5].getValue()!=self.n and self.board.cells[6].getValue()!=self.n and self.board.cells[7].getValue()!=self.n and self.board.cells[8].getValue()!=self.n):
            self.result="Draw"
        self.verticalCheck()
        self.horizontalCheck()
        self.diagonalCheck()

    def verticalCheck(self):
        if(self.board.cells[0].getValue()=="X" and self.board.cells[3].getValue()=="X" and self.board.cells[6].getValue()=="X"):
            self.result="Win"
            self.win=1 
        elif(self.board.cells[1].getValue()=="X" and self.board.cells[4].getValue()=="X" and self.board.cells[7].getValue()=="X"):
            self.result="Win"
            self.win=1 
        elif(self.board.cells[2].getValue()=="X" and self.board.cells[5].getValue()=="X" and self.board.cells[8].getValue()=="X"):
            self.result="Win"
            self.win=1 

        if(self.board.cells[0].getValue()=="0" and self.board.cells[3].getValue()=="0" and self.board.cells[6].getValue()=="0"):
            self.result="Win"
            self.win=2
        elif(self.board.cells[1].getValue()=="0" and self.board.cells[4].getValue()=="0" and self.board.cells[7].getValue()=="0"):
            self.result="Win"
            self.win=2
        elif(self.board.cells[2].getValue()=="0" and self.board.cells[5].getValue()=="0" and self.board.cells[8].getValue()=="0"):
            self.result="Win"
            self.win=2 
    
    def horizontalCheck(self):
        if(self.board.cells[0].getValue()=="X" and self.board.cells[1].getValue()=="X" and self.board.cells[2].getValue()=="X"):
            self.result="Win"
            self.win=1 
		 
        elif(self.board.cells[3].getValue()=="X" and self.board.cells[4].getValue()=="X" and self.board.cells[5].getValue()=="X"):
            self.result="Win" 
            self.win=1 
		 
        elif(self.board.cells[6].getValue()=="X" and self.board.cells[7].getValue()=="X" and self.board.cells[8].getValue()=="X"): 
            self.result="Win"
            self.win=1 
		 
        if(self.board.cells[0].getValue()=="0" and self.board.cells[1].getValue()=="0" and self.board.cells[2].getValue()=="0"): 
            self.result="Win"
            self.win=2 
		 
        elif(self.board.cells[3].getValue()=="0" and self.board.cells[4].getValue()=="0" and self.board.cells[5].getValue()=="0"):
            self.result="Win"
            self.win=2 
		 
        elif(self.board.cells[6].getValue()=="0" and self.board.cells[7].getValue()=="0" and self.board.cells[8].getValue()=="0"):
            self.result="Win" 
            self.win=2 

    def diagonalCheck(self):
        if(self.board.cells[0].getValue()=="X" and self.board.cells[4].getValue()=="X" and self.board.cells[8].getValue()=="X"):
            self.result="Win"
            self.win=1 
		 
        elif(self.board.cells[2].getValue()=="X" and self.board.cells[4].getValue()=="X" and self.board.cells[6].getValue()=="X"):
            self.result="Win"
            self.win=1 
		 
        if(self.board.cells[0].getValue()=="0" and self.board.cells[4].getValue()=="0" and self.board.cells[8].getValue()=="0"):
            self.result="Win"
            self.win=2 
		 
        elif(self.board.cells[2].getValue()=="0" and self.board.cells[4].getValue()=="0" and self.board.cells[6].getValue()=="0"):
            self.result="Win"
            self.win=2