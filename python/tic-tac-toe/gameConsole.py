from board import Board
from player import Player
from resultAnalyzer import ResultAnalyzer
from game import Game
count=0
no=0
board=Board()
p1=Player(1,"p1")
p2=Player(2,"p2")
players=[p1,p2]
analyzer=ResultAnalyzer(board)
g=Game(players,analyzer,board)
def printBoard(b):
    for i in range(9):
        cellValue=board.cells[i].getValue()
        if(cellValue==""):
            cellValue="-"
        print(" |",cellValue, end='', flush=True)
        if(i==2 or i==5 or i==8):
            print(" |")

while(analyzer.result=="Inprogress"):
    printBoard(board)
    print("-----------------")
    print((players[(count%2)].name) ,"Enter your choice")
    count+=1
    no=int(input())
    if(no>8):
        count-=1
        print("Enter a valid no")
    elif(board.cells[no].getValue()=="X" or board.cells[no].getValue()=="0"):
        count-=1
        g.play(no)
    else:
        g.play(no)
    analyzer.checkResult()
    res=analyzer.getResult()
    if(res=="Inprogress"):
        print("In progress")
    elif(res=="Win"):
        printBoard(board)
        print(players[analyzer.getWinner()-1].name+" wins")
    elif(res=="Draw"):
        printBoard(board)
        print("draw")