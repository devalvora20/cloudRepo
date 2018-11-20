multiply = lambda a,b : a*b
print("multiplying 4,7 : ",multiply(4,7))

numbers = [5, 7, 22, 97, 54, 62, 77, 23, 73, 61] 
evenNumbers=list(filter(lambda x: (x%2 == 0) , numbers))
print("number: ",numbers)
print("even numbers: ",evenNumbers)