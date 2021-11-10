package com.ser.soccer.tournament.fieldDirector;

import com.ser.soccer.tournament.schedular.Match;
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

    public List<Match> getAll(FilterPojo filter) {
        if(filter == null)
            return null;

        Query query = new Query();
        query.addCriteria(Criteria.where("played").is(true));

        if (filter.getDate() != null)
            query.addCriteria(Criteria.where("matchDate").is(filter.getDate()));
        return mongoTemplate.find(query, Match.class);
    }

}