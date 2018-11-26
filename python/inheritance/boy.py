from man import Man
class Boy(Man): 
    def __init__(self):
        super(Boy, self).__init__()
        print("Boy created")

    def eat(self):
        print("Boy eats")

    def play(self):
        print("Boy plays")