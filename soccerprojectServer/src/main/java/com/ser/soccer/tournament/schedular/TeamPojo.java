package com.ser.soccer.tournament.schedular;


import org.springframework.data.mongodb.core.mapping.Document;





@Document(collection="teams")
public class TeamPojo {
	
	private String name;
	private String category;
	public TeamPojo(String name, String category) {
		super();
		this.name = name;
		this.category = category;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	
	

}
