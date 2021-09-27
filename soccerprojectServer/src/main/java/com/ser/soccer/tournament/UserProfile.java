package com.ser.soccer.tournament;
public class UserProfile {

    private String firstName;
    private String lastName;
    private String email;
    private String username;
    private String date_of_birth;
    private String address;
    private String mobile_no;
    private userRole userRole;

    public UserProfile(String firstName, String lastName, String email, String username, String date_of_birth, String address,String mobile_no;) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.date_of_birth = date_of_birth;
        this.address = address;
        this.mobile_no = mobile_no;
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





    public userRole getUserRole() {
        return userRole;
    }


    public void setUserRole(userRole userRole) {
        this.userRole = userRole;
    }

}