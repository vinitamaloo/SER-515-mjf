package com.ser.soccer.tournament.schedular;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationOperation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.GroupOperation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

@Repository("teamsRepo")
public class TeamsRepo {

    @Autowired
    private MongoTemplate mongoTemplate;
    @Autowired
    MongoOperations mg;

    public List<TeamByCategory> getTeams(String category) {
//		if(user == null || user.trim().isEmpty())
//			return null;

        Query query = new Query();
        query.addCriteria(Criteria.where("category").is(category));
        return mongoTemplate.find(query, TeamByCategory.class);
    }

    public List<TeamByCategory> getTeamsByCategory() {
        // Query query = new Query();
        List<AggregationOperation> aggregations = new ArrayList<>();
        GroupOperation group1 = Aggregation.group("$applicationGroup").push("$$ROOT").as("teams");
//        aggregations.add(group1);
////=        Aggregation<TeamPojo> agg = Aggregation.newAggregation(TeamPojo.class,Aggregation.group("applicationGroup").push("$$ROOT"));
////        AggregationResults<TeamPojo> results = mongoTemplate.aggregate(agg, "test", TeamPojo.class);
////        List<TeamPojo> list = results.getMappedResults();
//        Aggregation aggregation = Aggregation.newAggregation(aggregations);
//
//        Document doc = mg.aggregate(aggregation, "teams", Document.class).getUniqueMappedResult();
//
//        if (doc != null) {
//            return (List<TeamPojo>) doc;
//        }
        Aggregation aggregation = Aggregation.newAggregation(group1);

        AggregationResults<TeamByCategory> output = mongoTemplate.aggregate(aggregation, "teams", TeamByCategory.class);
        List<TeamByCategory> list = output.getMappedResults();
        return list;
    }

}
