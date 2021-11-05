package com.ser.soccer.tournament.referee;

import org.springframework.data.mongodb.core.mapping.Document;

/**
 * 
 * @author Harshita Jain
 *
 */
@Document(collection="referee")
public class Referee {

    private String firstname;
    private String lastname;
    private String email;
    private String ussf;
    private String address;
    private String country;
    private String city;
    private String state;
    private String zipcode;
    private String phone;
    private String grade;
    private String experience;
    private int age;
    private String availability;
    private String time;
    private String profile;
    private String gender;
    private String agegroup;
	private String application;



	private String isAssigned;





    public Referee(String firstname, String lastname, String email, String ussf, String address, String country,
			String city, String state, String zipcode, String phone, String grade, String experience, int age,
			String availability, String time, String profile, String gender, String agegroup, String application, String isAssigned) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.ussf = ussf;
		this.address = address;
		this.country = country;
		this.city = city;
		this.state = state;
		this.zipcode = zipcode;
		this.phone = phone;
		this.grade = grade;
		this.experience = experience;
		this.age = age;
		this.availability = availability;
		this.time = time;
		this.profile = profile;
		this.gender = gender;
		this.agegroup = agegroup;
		this.application = application;
		this.isAssigned = isAssigned;
	}


	public String getApplication() {
		return application;
	}

	public void setApplication(String application) {
		this.application = application;
	}


	public String getFirstname() {
		return firstname;
	}


	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}


	public String getLastname() {
		return lastname;
	}


	public void setLastname(String lastname) {
		this.lastname = lastname;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getUssf() {
		return ussf;
	}


	public void setUssf(String ussf) {
		this.ussf = ussf;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getCountry() {
		return country;
	}


	public void setCountry(String country) {
		this.country = country;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public String getState() {
		return state;
	}


	public void setState(String state) {
		this.state = state;
	}


	public String getZipcode() {
		return zipcode;
	}


	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}


	public String getPhone() {
		return phone;
	}


	public void setPhone(String phone) {
		this.phone = phone;
	}


	public String getGrade() {
		return grade;
	}


	public void setGrade(String grade) {
		this.grade = grade;
	}


	public String getExperience() {
		return experience;
	}


	public void setExperience(String experience) {
		this.experience = experience;
	}


	public int getAge() {
		return age;
	}


	public void setAge(int age) {
		this.age = age;
	}


	public String getAvailability() {
		return availability;
	}


	public void setAvailability(String availability) {
		this.availability = availability;
	}


	public String getTime() {
		return time;
	}


	public void setTime(String time) {
		this.time = time;
	}


	public String getProfile() {
		return profile;
	}


	public void setProfile(String profile) {
		this.profile = profile;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public String getAgegroup() {
		return agegroup;
	}


	public void setAgegroup(String agegroup) {
		this.agegroup = agegroup;
	}

	public String getIsAssigned() {
		return isAssigned;
	}

	public void setIsAssigned(String isAssigned) {
		this.isAssigned = isAssigned;
	}



}
