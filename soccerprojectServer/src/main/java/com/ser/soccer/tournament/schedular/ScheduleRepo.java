package com.ser.soccer.tournament.schedular;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

@Repository("scheduleRepo")
public class ScheduleRepo {
    @Autowired
    private MongoTemplate mongoTemplate;

    public Schedule save(Schedule sch) {
        if (sch == null)
            return null;

        return mongoTemplate.save(sch);
    }

    public void delete(String category) {
        Query query = new Query();
        query.addCriteria(Criteria.where("category").is(category));
        mongoTemplate.remove(query, Schedule.class);
    }

    public List<Schedule> getSchedule() {
        Query query = new Query();
        List<Schedule> ans = mongoTemplate.find(query, Schedule.class);
        return ans;
    }

}
