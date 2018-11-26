from man import Man
from boy import Boy
from kid import Kid
def atThePark(man):
    print("In the park")
    man.play()

man = Man()
boy = Boy()
kid = Kid()
boy.play()
boy.walk()
boy.eat()
kid.play()
atThePark(man)
atThePark(kid)
atThePark(boy)