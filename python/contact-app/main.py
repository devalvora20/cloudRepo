from contactService import ContactService
choice=2
service=ContactService()
while int(choice)<5:
    print("---------------")
    choice=input("1.Add Contact\n2.Display Contact\n3.Exit\n")
    if int(choice)==1:
        name=input("Enter a name\n")
        number=input("Enter a number\n")
        service.addContact(name,number)
    elif int(choice)==2:
        service.displayContacts()
    else:
        break

