import json
from contact import Contact
class ContactService:
    def addContact(self,name,number):
        c1=Contact(name,number)
        contactToAdd={"name":name,"number":number}
        readContacts=open("./contact-app/contacts.json", "r")
        data = json.load(readContacts)
        readContacts.close()
        data.append(contactToAdd)
        contacts=open("./contact-app/contacts.json", "w")
        json.dump(data, contacts, sort_keys=True, indent=4)
        print(c1.name,"added!")

    def displayContacts(self):
        contacts=open("./contact-app/contacts.json", "r")
        data = json.load(contacts)
        print("Contacts List:")
        for contact in data:
            print(contact['name'],":",contact["number"])
        contacts.close()