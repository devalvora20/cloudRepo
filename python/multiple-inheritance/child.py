from base1 import Base1
from base2 import Base2
class Child(Base2,Base1):
    def __init__(self):
        super().__init__()
        print("Child created")