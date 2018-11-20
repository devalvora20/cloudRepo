class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def setName(self,name):
        self.name=name
    def setAge(self,age):
        self.age=age

p1 = Person("Deval", 22)
print(p1.name)
print(p1.age)
p1.setName("Deval Vora")
p1.setAge(24)
print(p1.name)
print(p1.age)