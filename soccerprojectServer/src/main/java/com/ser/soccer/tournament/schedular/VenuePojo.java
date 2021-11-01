package com.ser.soccer.tournament.schedular;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="venues")
public class VenuePojo {
	private String location;

	public VenuePojo(String location) {
		super();
		this.location = location;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}
	
}
