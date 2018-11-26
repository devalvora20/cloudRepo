from man import Man
class Kid(Man): 
    def __init__(self):
        super(Kid, self).__init__()
        print("Kid created")

    def play(self):
        print("Kid plays")