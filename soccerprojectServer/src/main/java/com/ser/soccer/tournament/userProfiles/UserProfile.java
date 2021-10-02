package com.ser.soccer.tournament.userProfiles;
import com.ser.soccer.tournament.userRole.*;
import java.util.*;

import org.springframework.data.mongodb.core.mapping.Document;
/**
 *
 * @author Jayasai Kalyan Reddy
 *
 */


public class UserProfile {

    private String id;
    private String userId;
    private String firstName;
    private String lastName;
    private String email;
    private String username;
    private String date_of_birth;
    private String address;
    private String mobile_no;
    private UserRole role;




    public UserProfile(String firstName, String lastName, String email,
                       String username, String date_of_birth, String address,String mobile_no,
                       UserRole role,String userId) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.date_of_birth = date_of_birth;
        this.address = address;
        this.mobile_no = mobile_no;
        this.userId = userId;
        this.role = role;

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getDate_of_birth() {
        return date_of_birth;
    }

    public void setDate_of_birth(String date_of_birth) {
        this.date_of_birth = date_of_birth;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getMobile_no() {
        return mobile_no;
    }

    public void setMobile_no(String mobile_no) {
        this.mobile_no = mobile_no;
    }

    public UserRole getRole() {
        return role;
    }

    public void setRole(UserRole role) {
        this.role = role;
    }
}