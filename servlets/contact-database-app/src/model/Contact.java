package model;

public class Contact {
	private String firstName;
	private String lastName;
	private long number;
	private int id;

	public Contact(int id, String firstName, String lastName, long number) {
		this.id=id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.number = number;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public long getNumber() {
		return number;
	}

	public void setNumber(long number) {
		this.number = number;
	}

}
