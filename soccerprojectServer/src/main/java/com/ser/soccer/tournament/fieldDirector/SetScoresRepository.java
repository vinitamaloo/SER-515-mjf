package com.ser.soccer.tournament.fieldDirector;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

@Repository("setScoresRepo")
public class SetScoresRepository {
    @Autowired
    private MongoTemplate mongoTemplate;

    public SetScores add(SetScores setScores) {
        if(setScores == null)
            return null;

        return mongoTemplate.save(setScores);
    }

}
