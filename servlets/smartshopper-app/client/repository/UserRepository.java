package repository;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.Statement;
import java.util.UUID;

import model.User;
import services.UserService;

public class UserRepository {
	private static UserRepository repository = null;
	private final String url = "jdbc:mysql://localhost:3306/swabhav_db";
	private final String id = "root";
	private final String pass = "root";
	UserService service;
	int uid;
	Statement stmt = null;
	ResultSet rs = null;
	Connection conn = null;
	ResultSetMetaData rsmd = null;

	private UserRepository() {
		uid = 4;
	}

	public static UserRepository getInstance() {
		if (repository == null) {
			repository = new UserRepository();
		}
		return repository;
	}

	public boolean registerUser(String firstName, String lastName,
			String email, String password) {
		UUID uuid = UUID.randomUUID();
		String d = java.time.Clock.systemUTC().instant().toString();
		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			conn = DriverManager.getConnection(url, id, pass);
			stmt = conn.createStatement();
			PreparedStatement ps = conn
					.prepareStatement("insert into users(user_id,firstName,lastName,email,password,registrationDate,role) values (?,?,?,?,?,?,?)");
			ps.setString(1, uuid.toString());
			ps.setString(2, firstName);
			ps.setString(3, lastName);
			ps.setString(4, email);
			ps.setString(5, password);
			ps.setString(6, d);
			ps.setString(7, "u");
			ps.executeUpdate();
			stmt.close();
			conn.close();
			return true;
		} catch (Exception ex) {
			System.out.println("SQLException: " + ex.getMessage());
			return false;
		}

	}

	public User authenticateUser(String email, String password) {
		service=UserService.getInstance();
		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			conn = DriverManager.getConnection(url, id, pass);
			stmt = conn.createStatement();
			PreparedStatement ps = conn
					.prepareStatement("select * from users where email=? and password=?");
			ps.setString(1, email);
			ps.setString(2, password);
			rs = ps.executeQuery();
			if (rs.next()) {
				service.setIsLoggedIn(true);
				service.setFirstName(rs.getString(2));
			
				return new User(rs.getString(1),rs.getString(2),rs.getString(3),rs.getString(5),rs.getString(6));
			} else {
				return null;
			}

		} catch (Exception ex) {
			System.out.println("SQLException: " + ex.getMessage());
			return null;
		}
	}

}
