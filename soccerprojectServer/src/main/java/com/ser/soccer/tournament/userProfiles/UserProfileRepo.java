package com.ser.soccer.tournament.userProfiles;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

@Repository("userProfileRepo")
public class UserProfileRepo {

	@Autowired
	private MongoTemplate mongoTemplate;

	public UserProfile getById(String userId) {
		if(userId == null || userId.trim().isEmpty())
			return null;

		Query query=new Query();
		query.addCriteria(Criteria.where("userId").is(userId));
		return mongoTemplate.findOne(query, UserProfile.class);
	}




	public UserProfile add(UserProfile userProfile) {
		if(userProfile == null)
			return null;

		return mongoTemplate.save(userProfile);
	}


}