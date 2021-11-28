package com.ser.soccer.tournament.team_registration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.core.query.Update;

import java.util.List;
import java.util.Queue;

@Repository("teamRepo")
public class TeamRepository {
    @Autowired
    private MongoTemplate mongoTemplate;

    public TeamRegister add(TeamRegister teamRegister) {
        if(teamRegister == null)
            return null;

        return mongoTemplate.save(teamRegister);
    }

    public TeamRegister getTeamById(String teamId) {
        Query query = new Query();
        query.addCriteria(Criteria.where("teamId").is(teamId));
        return mongoTemplate.findOne(query, TeamRegister.class);
    }

    public List<TeamRegister> getAllTeams(TeamStatus teamStatus) {
        Query query = new Query();
        query.addCriteria(Criteria.where(teamStatus.getStatus()).is("Registered"));
        return mongoTemplate.find(query, TeamRegister.class);
    }

    public void changeTeamStatus(TeamRegister teamRegister) {
        Query query = new Query();
        Update update = new Update();
        query.addCriteria(Criteria.where("teamStatus").is(teamRegister.getTeamStatus()));
        update.set("teamStatus", teamRegister.getTeamStatus());
        mongoTemplate.updateFirst(query, update, TeamRegister.class);
    }
}
