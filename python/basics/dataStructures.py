list1 = ["list1", "list2", "list3"]
print(list1)
list1.append("list5")
print(list1)
list1.insert(3,"list4")
print(list1)
list1.append("list")
list1.append("list")
print(list1)
print(" 'List' count :",list1.count("list"))
list1.pop()
print(list1)
list1.remove("list2")
print(list1)
list1.sort()
print(list1)
print("-----------------------------------")
print(list1[2])

tuple1=("tuple1","tuple2","tuple3")
print(tuple1)
print(tuple1[0])
for t in tuple1:
    print(t)
if "tuple1" in tuple1:
    print("'tuple 1' is in the tuple")
print(len(tuple1))
print(tuple1.index('tuple3'))

dict1 =	{
  "key1": "value1",
  "key2": "value2",
  "key3": "value3"
}
print(dict1)
print(dict1["key2"])
print(dict1.get("key2"))
dict1["key3"]="updated value3"
print(dict1)
dict1["key4"] = "value4"
print(dict1)
dict1.pop("key2")
print(dict1)

set1={"set1","set2","set3"}
print(set1)
set1.add("set4")
print(set1)
set1.remove("set2")
print(set1)
set1.pop()
print(set1)
print(len(set1))
set1.update(["set5","set6","set7"])
print(set1)