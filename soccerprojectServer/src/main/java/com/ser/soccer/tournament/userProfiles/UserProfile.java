package com.ser.soccer.tournament.userProfiles;
import com.ser.soccer.tournament.userRole.*;
import java.util.*;

import org.springframework.data.mongodb.core.mapping.Document;
/**
 * 
 * @author Jayasai Kalyan Reddy
 *
 */

@Document(collection="userRole")
public class UserProfile {

    private String firstName;
    private String lastName;
    private String email;
    private String username;
    private String date_of_birth;
    private String address;
    private String mobile_no;
    private UserRole role;
	private UserRole id;
    private UserRole createdOn;
    private UserRole modifiedOn;
    private UserRole userId;

    
    
    public UserProfile(String firstName, String lastName, String email, String username, String date_of_birth, String address,String mobile_no, UserRole role,UserRole id, UserRole userId, UserRole createdOn, UserRole modifiedOn) {
    	super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.date_of_birth = date_of_birth;
        this.address = address;
        this.mobile_no = mobile_no;
        this.role = role;
        this.id = id;
        this.modifiedOn = modifiedOn;
        this.createdOn = createdOn;
        this.userId = userId;
    }
    
    public UserRole getRole() {
		return role;
	}

	public void setRole(UserRole role) {
		this.role = role;
	}

	public UserRole getId() {
		return id;
	}

	public void setId(UserRole id) {
		this.id = id;
	}

	public UserRole getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(UserRole createdOn) {
		this.createdOn = createdOn;
	}

	public UserRole getModifiedOn() {
		return modifiedOn;
	}

	public void setModifiedOn(UserRole modifiedOn) {
		this.modifiedOn = modifiedOn;
	}

	public UserRole getUserId() {
		return userId;
	}

	public void setUserId(UserRole userId) {
		this.userId = userId;
	}

    

   

    public String getfirstName() {
        return firstName;
    }

    public void setfirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getlastName() {
        return lastName;
    }

    public void setlastName(String lastName) {
        this.lastName = lastName;
    }

    public String getemail() {
        return email;
    }

    public void setemail(String email) {
        this.email = email;
    }

    public String getusername() {
        return username;
    }

    public void setusername(String username) {
        this.username = username;
    }

    public String date_of_birth() {
        return date_of_birth;
    }

    public void setdate_of_birth(String date_of_birth) {
        this.date_of_birth = date_of_birth;
    }

    public String getaddress() {
        return address;
    }

    public void setaddress(String address) {
        this.address = address;
    }

    public String getmobile_no() {
        return mobile_no;
    }

    public void setmobile_no(String mobile_no) {
        this.mobile_no = mobile_no;
    }





   
}