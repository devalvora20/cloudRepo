package repository;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;
import java.sql.PreparedStatement;
import java.util.ArrayList;
import java.util.List;

import service.ContactService;
import model.Contact;

public class ContactRepository {
	List<Contact> contacts;
	private final String url = "jdbc:mysql://localhost:3306/contacts_db";
	private final String id = "root";
	private final String pass = "root";
	static ContactRepository repository;
	Statement stmt = null;
	ResultSet rs = null;
	Connection conn = null;
	ResultSetMetaData rsmd = null;

	private ContactRepository() {
		contacts = new ArrayList<Contact>();
	}

	public static ContactRepository getInstance() {
		if (repository == null) {
			repository = new ContactRepository();
		}
		return repository;
	}

	public List<Contact> getContacts() {
		contacts.clear();
		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			conn = DriverManager.getConnection(url, id, pass);
			stmt = conn.createStatement();
			PreparedStatement ps = conn
					.prepareStatement("SELECT * FROM contact");
			rs = ps.executeQuery();
			rsmd = rs.getMetaData();
			while (rs.next()) {
				addContactObject(Integer.parseInt(rs.getString(1)),
						rs.getString(2), rs.getString(3),
						Long.parseLong(rs.getString(4)));
			}
			rs.close();
			stmt.close();
			conn.close();
		} catch (Exception ex) {
			System.out.println("SQLException: " + ex.getMessage());
		}

		return contacts;
	}

	public void addContact(String firstName, String lastName, int number) {
		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			conn = DriverManager.getConnection(url, id, pass);
			stmt = conn.createStatement();
			PreparedStatement ps = conn
					.prepareStatement("Insert into contact(FirstName,LastName,number) values(?,?,?)");
			ps.setString(1, firstName);
			ps.setString(2, lastName);
			ps.setString(3, String.valueOf(number));
			ps.executeUpdate();

			stmt.close();
			conn.close();
		} catch (Exception ex) {
			System.out.println("SQLException: " + ex.getMessage());
		}
	}

	public void addContactObject(int id, String firstName, String lastName,
			long number) {
		Contact contact = new Contact(id, firstName, lastName, number);
		contacts.add(contact);
	}

	public Contact getContact(int idToGet) {
		Contact contact = null;
		for (int i = 0; i < contacts.size(); i++) {
			contact = contacts.get(i);
			if (contact.getId() == idToGet)
				return contact;
		}
		return contact;
	}

	public void editContact(int idToEdit, String firstName, String lastName,
			int number) {
		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			conn = DriverManager.getConnection(url, id, pass);
			stmt = conn.createStatement();
			PreparedStatement ps = conn
					.prepareStatement("update contact set FirstName=?,LastName=?,number=? where id="+idToEdit);
			ps.setString(1, firstName);
			ps.setString(2, lastName);
			ps.setString(3, String.valueOf(number));
			ps.executeUpdate();
			stmt.close();
			conn.close();
		} catch (Exception ex) {
			System.out.println("SQLException: " + ex.getMessage());
		}
	}

	public void deleteContact(int idToDelete) {
		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			conn = DriverManager.getConnection(url, id, pass);
			stmt = conn.createStatement();
			PreparedStatement ps = conn
					.prepareStatement("delete from contact where id="+idToDelete);
			ps.executeUpdate();
			stmt.close();
			conn.close();
		} catch (Exception ex) {
			System.out.println("SQLException: " + ex.getMessage());
		}
	}

}
