package com.ser.soccer.tournament.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;


@Repository("adminsRepo")
public class AdminRepo {

	@Autowired
	private MongoTemplate mongoTemplate;

	public Admin getByUsername(Admin user) {
//		if(user == null || user.trim().isEmpty())
//			return null;

		Query query=new Query();
		query.addCriteria(Criteria.where("email").is(user.getEmail()));
		query.addCriteria(Criteria.where("password").is(user.getPassword()));
		return mongoTemplate.findOne(query, Admin.class);
	}

	public List<Admin> getAll() {
		return mongoTemplate.findAll(Admin.class);
	}

	public Admin add(Admin admin) {
		if(admin == null)
			return null;

		return mongoTemplate.save(admin);
	}

	public void remove(Admin admin) {

		Query query = new Query();
		query.addCriteria(Criteria.where("email").is(admin.getEmail()));
		mongoTemplate.remove(query, Admin.class);
	}
}
