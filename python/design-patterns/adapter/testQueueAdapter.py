from swabhavQueue import SwabhavQueue
numq=SwabhavQueue()
numq.enqueue(10)
numq.enqueue(20)
numq.enqueue(30)
numq.enqueue("abc")
for n in numq:
    print(n)
print("queue count:",numq.count())
print("item dequeued:",numq.dequeue())
print("queue count:",numq.count())
print("numq array:")
for n in numq:
    print(n)