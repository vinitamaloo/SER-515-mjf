package com.ser.soccer.tournament.fieldDirector;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("setScoresRepo")
public class SetScoresRepository {
    @Autowired
    private MongoTemplate mongoTemplate;

    public SetScores add(SetScores setScores) {
        if(setScores == null)
            return null;

        return mongoTemplate.save(setScores);
    }

    public List<SetScores> getAll(FilterPojo filter) {
        if(filter == null)
            return null;

        Query query = new Query();
        if (filter.getMatchDate() != null) {
            query.addCriteria(Criteria.where("matchDate").is(filter.getMatchDate()));
        }

        if (filter.getCategory() != null) {
            query.addCriteria(Criteria.where("category").is(filter.getCategory()));
        }

        return mongoTemplate.find(query, SetScores.class);
    }

}
