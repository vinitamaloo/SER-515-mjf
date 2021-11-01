package com.ser.soccer.tournament.schedular;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;


@Repository("venueRepo")
public class VenueRepo {

	@Autowired
	private MongoTemplate mongoTemplate;

	public List<VenuePojo> getVenues() {
//		if(user == null || user.trim().isEmpty())
//			return null;

		Query query=new Query();
		return mongoTemplate.find(query, VenuePojo.class);
	}


}

