class OutOfRangeError(Exception):
   pass

num1=input("Enter 1st number\n")
num2=input("Enter 2nd number\n")
try:
    num1=int(num1)
    num2=int(num2)
    print(num1/num2)
except ValueError:
    print("Value Error")
except ZeroDivisionError:
    print("Zero Division Error")

try:
    num=int(input("Enter a number between 1 - 10\n"))
    if(num<1 or num>10):
        raise OutOfRangeError
    else:
        print("Number is correct")
except OutOfRangeError:
    print("ERROR: Number out of 1-10")