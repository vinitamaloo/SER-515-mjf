package com.ser.soccer.tournament.referee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

@Repository("refereeRepo")
public class RefereeRepository {

	@Autowired
	private MongoTemplate mongoTemplate;

    public Referee add(Referee referee) {
		if(referee == null)
			return null;

		return mongoTemplate.save(referee);
	}
    
}
