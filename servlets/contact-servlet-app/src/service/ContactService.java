package service;

import java.util.ArrayList;
import java.util.List;

import model.Contact;

public class ContactService {
	private List<Contact> contacts = new ArrayList<Contact>();
	static ContactService service;
	static int id;

	private ContactService() {
		addContact("Deval", "Vora", 123456);
		addContact("Rachel", "Greene", 873276);
		addContact("Sheldon", "Cooper", 123456);
	}

	public static ContactService getInstance() {
		if (service == null) {
			id=1;
			service = new ContactService();
		}
		return service;
	}

	public List<Contact> getContacts() {
		return contacts;
	}

	public void addContact(String firstName, String lastName, long number) {
		Contact contact = new Contact(id++,firstName, lastName, number);
		contacts.add(contact);
	}

	public Contact getContact(int id) {
		// TODO Auto-generated method stub
		Contact contact;
		for(int i=0;i<contacts.size();i++){
			contact=contacts.get(i);
			if(contact.getId()==id)
				return contact;
		}
		return null;
	}

	public void editContact(int id, String firstName, String lastName,
			long number) {
		// TODO Auto-generated method stub
		Contact contact=null;
		for(int i=0;i<contacts.size();i++){
			contact=contacts.get(i);
			if(contact.getId()==id){
				break;
			}				
		}		
		contacts.remove(contact);
		contacts.add(new Contact(id,firstName,lastName,number));
	}

	public void deleteContact(int idToDelete) {
		// TODO Auto-generated method stub
		Contact contact=null;
		for(int i=0;i<contacts.size();i++){
			contact=contacts.get(i);
			if(contact.getId()==idToDelete){
				break;
			}				
		}		
		contacts.remove(contact);
	}

}
