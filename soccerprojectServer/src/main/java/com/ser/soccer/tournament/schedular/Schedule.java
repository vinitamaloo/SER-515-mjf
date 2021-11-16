package com.ser.soccer.tournament.schedular;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "schedule")
public class Schedule {

    private String category;
    private List<Match> matches;

    public Schedule(String category, List<Match> matches) {
        super();
        this.category = category;
        this.matches = matches;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public List<Match> getMatches() {
        return matches;
    }

    public void setMatches(List<Match> matches) {
        this.matches = matches;
    }

}
