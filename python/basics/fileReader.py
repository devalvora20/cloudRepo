readFile = open("./basics/sample.txt", "r")
print(readFile.read())
print("------")
readFile.close()
writeFile = open("./basics/sample.txt", "a")
writeFile.write("\nI appended this content from program")
print("------")
writeFile.close()
readFile = open("./basics/sample.txt", "r")
print(readFile.read())
print("------")
readFile.close()
print("End of code")