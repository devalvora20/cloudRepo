package services;

import model.User;
import repository.UserRepository;

public class UserService {
	boolean isLoggedIn;
	String firstName;
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	static UserService userService = null;
	UserRepository repository = null;

	public boolean isLoggedIn() {
		return isLoggedIn;
	}

	public void setIsLoggedIn(boolean isLoggedIn) {
		this.isLoggedIn = isLoggedIn;
	}

	public UserService() {
		userService=this;
		repository = UserRepository.getInstance();
	}

	public static UserService getInstance() {
		
		return userService;
	}

	public boolean regiserUser(String firstName, String lastName, String email,
			String password) {
		return repository.registerUser(firstName, lastName, email, password);
	}

	public User authenticateUser(String email, String password) {
		return repository.authenticateUser(email, password);
	}

}
