package com.ser.soccer.tournament.referee;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

@Repository("refereeRepo")
public class RefereeRepository {

	@Autowired
	private MongoTemplate mongoTemplate;

    public Referee add(Referee referee) {
		if(referee == null)
			return null;

		return mongoTemplate.save(referee);
	}

	public List<Referee> getByApplication(String application) {

		Query query=new Query();
		query.addCriteria(Criteria.where("application").is(application));
		return mongoTemplate.find(query, Referee.class);
	}
    
}
