package com.ser.soccer.tournament.admin;


import org.springframework.data.mongodb.core.mapping.Document;



@Document(collection="admins")
public class Admin {
	
	private String email;
	private String password;
	public Admin(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	

}
