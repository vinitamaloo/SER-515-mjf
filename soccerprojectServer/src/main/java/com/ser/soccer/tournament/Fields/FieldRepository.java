package com.ser.soccer.tournament.Fields;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 *
 * @author Jayasai Kalyan Reddy
 *
 */

@Repository("fieldRepo")
public class FieldRepository {
    @Autowired
    private MongoTemplate mongoTemplate;
    public Fields addField(Fields f) {
        if(f == null)
            return null;

        return mongoTemplate.save(f);
    }

    public List<Fields> getUnassignedFields(){
        Query query=new Query();
        query.addCriteria(Criteria.where("refereeEmail").is(""));
        return mongoTemplate.find(query,Fields.class);
    }

    public Fields add(Fields field) {
		if(field == null)
			return null;

		return mongoTemplate.save(field);
	}
    public void updateRefereeName(UpdateReferee updateReferee) {
        Query query=new Query();
        query.addCriteria(Criteria.where("field").is(updateReferee.getField()));
        Update update = new Update();
//        System.out.println(updateReferee.getRefereeName() + updateReferee.getField());
        update.set("refereeName", updateReferee.getRefereeName());
        mongoTemplate.updateFirst(query, update, Fields.class);
    }

    public void updateRefereeEmail(UpdateReferee updateReferee) {
        Query query=new Query();
        query.addCriteria(Criteria.where("field").is(updateReferee.getField()));
        Update update = new Update();
//        System.out.println(updateReferee.getRefereeName() + updateReferee.getField());
        update.set("refereeEmail", updateReferee.getRefereeEmail());
        mongoTemplate.updateFirst(query, update, Fields.class);
    }
}
