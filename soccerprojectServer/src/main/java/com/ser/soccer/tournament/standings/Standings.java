package com.ser.soccer.tournament.standings;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Collection;

@Document(collection = "results")
public class Standings {
    private String teamName;
    private String Category;
    private int points;

    public String getCategory() {
        return Category;
    }

    public void setCategory(String category) {
        Category = category;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }
}
