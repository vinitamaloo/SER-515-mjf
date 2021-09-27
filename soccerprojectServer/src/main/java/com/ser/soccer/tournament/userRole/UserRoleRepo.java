package com.ser.soccer.tournament.userRole;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

@Repository("userRoleRepo")
public class UserRoleRepo {
	
	@Autowired
	private MongoTemplate mongoTemplate;
	
	public UserRole getById(String userId) {
		if(userId == null || userId.trim().isEmpty())
			return null;
		
		Query query=new Query();
		query.addCriteria(Criteria.where("userId").is(userId));
		return mongoTemplate.findOne(query, UserRole.class);
	}

	
	public UserRole add(UserRole userRole) {
		if(userRole == null)
			return null;
		
		return mongoTemplate.save(userRole);
	}

	
}
