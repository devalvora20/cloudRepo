from bmwFactory import BMWFactory
from audiFactory import AudiFactory
from toyotaFactory import ToyotaFactory
factory1 = AudiFactory()
factory2=ToyotaFactory()
factory3=BMWFactory()
auto1 = factory1.make()
auto1.start()
auto1.stop()
auto2=factory2.make()
auto2.start()
auto2.stop()
auto3=factory3.make()
auto3.start()
auto3.stop()
print(auto1)
print(auto2)
print(auto3)