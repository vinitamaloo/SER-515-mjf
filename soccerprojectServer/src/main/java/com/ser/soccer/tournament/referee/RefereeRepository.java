package com.ser.soccer.tournament.referee;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

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

	public List<Referee> getAccepted(String application) {

		Query query=new Query();
		query.addCriteria(Criteria.where("application").is("Accept"));
		return mongoTemplate.find(query, Referee.class);
	}

	public Referee getByEmail(String email) {

		Query query=new Query();
		query.addCriteria(Criteria.where("email").is(email));
		return mongoTemplate.findOne(query, Referee.class);
	}

	public void updateByEmail(ApplicationStatus application) {
		Query query=new Query();
		query.addCriteria(Criteria.where("email").is(application.getEmail()));
		Update update = new Update();
		update.set("application", application.getApplication());
		mongoTemplate.updateFirst(query, update, Referee.class);
	}

	public void updateStatusByEmail(String refereeEmail) {

		Query query=new Query();
		query.addCriteria(Criteria.where("email").is(refereeEmail));
		Update update = new Update();
		update.set("isAssigned", "True");
		mongoTemplate.updateFirst(query, update, Referee.class);
	}

}
