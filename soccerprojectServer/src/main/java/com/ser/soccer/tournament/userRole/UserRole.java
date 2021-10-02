package com.ser.soccer.tournament.userRole;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;

/**
 * 
 * @author Vinita Maloo
 *
 */
@Document(collection="userRole")
public class UserRole {
	
	private String id;
	private ROLE role;
	private Date createdOn;
	private Date modifiedOn;
	
	public UserRole(String id, ROLE role, Date createdOn, Date modifiedOn) {
		super();
		this.id = id;
		this.role = role;
		this.createdOn = createdOn;
		this.modifiedOn = modifiedOn;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	public ROLE getRole() {
		return role;
	}
	public void setRole(ROLE role) {
		this.role = role;
	}
	public Date getCreatedOn() {
		return createdOn;
	}
	public void setCreatedOn(Date createdOn) {
		this.createdOn = createdOn;
	}
	public Date getModifiedOn() {
		return modifiedOn;
	}
	public void setModifiedOn(Date modifiedOn) {
		this.modifiedOn = modifiedOn;
	}
}
