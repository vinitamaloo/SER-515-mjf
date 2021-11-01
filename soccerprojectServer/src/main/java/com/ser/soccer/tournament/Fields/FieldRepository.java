package com.ser.soccer.tournament.Fields;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
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
        return mongoTemplate.find(query,Fields.class);
    }
}
