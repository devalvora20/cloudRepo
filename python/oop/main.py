from human import Human
h1=Human("Deval",5.5,50)
print(f"Name is {h1.name} \nHeight is {h1.height} \nweight is {h1.weight}")
h1.play()
print(h1.__str__)
print(h1)
h2=Human("Deval",7.5,49)
h3=Human("Deval",7.5,49)
h4=Human("Deval",7.5,49)
print(id(h1))
print(id(h2))
print(h1==h2)
print(Human.getHeadCount())