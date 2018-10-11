package service;

public class AuthenticateService {
	public boolean authenticateUser(String emailId,String password){
		if(emailId.equals("root") && password.equals("root"))
			return true;
		return false;
	}
}
