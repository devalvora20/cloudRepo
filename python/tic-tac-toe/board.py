from cell import Cell
class Board:
    cells=[]
    def __init__(self):
        for x in range(9):
            self.cells.append(Cell())
    
    def cellSet(self,i,mark):
        return self.cells[i].setValue(mark)