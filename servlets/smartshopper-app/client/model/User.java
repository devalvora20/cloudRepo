package model;

public class User {
private String userId,firstName,lastName,email,registrationDate;

public User(String userId, String firstName, String lastName, String email,
		String registrationDate) {
	this.userId = userId;
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
	this.registrationDate = registrationDate;
}

public String getUserId() {
	return userId;
}

public void setUserId(String userId) {
	this.userId = userId;
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

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public String getRegistrationDate() {
	return registrationDate;
}

public void setRegistrationDate(String registrationDate) {
	this.registrationDate = registrationDate;
}
}
