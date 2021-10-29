package com.ser.soccer.tournament.schedular;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;


@Repository("teamsRepo")
public class TeamsRepo {

	@Autowired
	private MongoTemplate mongoTemplate;

	public List<TeamPojo> getTeams(String category) {
//		if(user == null || user.trim().isEmpty())
//			return null;

		Query query=new Query();
		query.addCriteria(Criteria.where("category").is(category));
		return mongoTemplate.find(query, TeamPojo.class);
	}


}
