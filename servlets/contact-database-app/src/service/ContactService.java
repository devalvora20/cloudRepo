package service;

import java.util.ArrayList;
import java.util.List;

import repository.ContactRepository;
import model.Contact;

public class ContactService {
	private List<Contact> contacts = new ArrayList<Contact>();
	static ContactService service;
	static int id;
	ContactRepository repository;

	private ContactService() {
		repository=ContactRepository.getInstance();
	}

	public static ContactService getInstance() {
		if (service == null) {
			id=1;
			service = new ContactService();
		}
		return service;
	}

	public List<Contact> getContacts() {
		return repository.getContacts();
	}

	public void addContact(String firstName, String lastName, long number) {
		repository.addContact(firstName, lastName,(int) number);
	}

	public Contact getContact(int id) {
		return repository.getContact(id);
	}

	public void editContact(int id, String firstName, String lastName,
			long number) {
		repository.editContact(id,firstName,lastName,(int)number);
	}

	public void deleteContact(int idToDelete) {
		// TODO Auto-generated method stub
		repository.deleteContact(idToDelete);
	}

}
