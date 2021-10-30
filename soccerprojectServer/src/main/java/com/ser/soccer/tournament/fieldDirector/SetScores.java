package com.ser.soccer.tournament.fieldDirector;

import org.springframework.data.mongodb.core.mapping.Document;

/**
 *
 * @author Chandra Sekhar Sai Sampath Swaroop
 *
 */
@Document(collection="scores")
public class SetScores {
    String teamAScore;
    String teamBScore;

    public SetScores(String teamAScore, String teamBScore) {
        this.teamAScore = teamAScore;
        this.teamBScore = teamBScore;
    }

    public String getTeamAScore() {
        return teamAScore;
    }

    public void setTeamAScore(String teamAScore) {
        this.teamAScore = teamAScore;
    }

    public String getTeamBScore() {
        return teamBScore;
    }

    public void setTeamBScore(String teamBScore) {
        this.teamBScore = teamBScore;
    }
}

