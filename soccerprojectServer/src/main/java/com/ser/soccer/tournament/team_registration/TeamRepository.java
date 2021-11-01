package com.ser.soccer.tournament.team_registration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

@Repository("teamRepo")
public class TeamRepository {
    @Autowired
    private MongoTemplate mongoTemplate;

    public TeamRegister add(TeamRegister teamRegister) {
        if(teamRegister == null)
            return null;

        return mongoTemplate.save(teamRegister);
    }

}