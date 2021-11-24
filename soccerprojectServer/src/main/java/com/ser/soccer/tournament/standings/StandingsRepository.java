package com.ser.soccer.tournament.standings;

import com.ser.soccer.tournament.referee.Referee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository("StandingsRepo")
public class StandingsRepository {

    @Autowired
    private MongoTemplate mongoTemplate;

    public List<Standings> getStandingsByCategory(Standings standings) {
        Query query=new Query();
        query.addCriteria(Criteria.where("category").is(standings.getCategory()));
        query.with(Sort.by(Sort.Direction.DESC, "points"));
        return mongoTemplate.find(query, Standings.class);
    }
}
