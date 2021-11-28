package com.ser.soccer.tournament.fieldDirector;

import org.springframework.data.mongodb.core.mapping.Document;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 *
 * @author Chandra Sekhar Sai Sampath Swaroop
 *
 */
@Document(collection="scores")
public class SetScores {
    String teamA;
    String teamB;
    Integer teamAGoals;
    Integer teamBGoals;
    Integer teamAPossession;
    Integer teamBPossession;
    Integer teamAFouls;
    Integer teamBFouls;
    Integer teamAYellowCards;
    Integer teamBYellowCards;
    Integer teamARedCards;
    Integer teamBRedCards;
    Integer teamAOffSides;
    Integer teamBOffSides;
    Integer teamACornerKicks;
    Integer teamBCornerKicks;
    Integer teamASaves;
    Integer teamBSaves;
    String teamAResult;
    String teamBResult;
    Date date;
    Integer gameTime;
    String matchDate;
    String category;

    public SetScores(String teamA, String teamB, Integer teamAGoals,
                     Integer teamBGoals, Integer teamAPossession, Integer teamBPossession,
                     Integer teamAFouls, Integer teamBFouls, Integer teamAYellowCards,
                     Integer teamBYellowCards, Integer teamARedCards, Integer teamBRedCards,
                     Integer teamAOffSides, Integer teamBOffSides, Integer teamACornerKicks,
                     Integer teamBCornerKicks, Integer teamASaves, Integer teamBSaves,
                     String teamAResult, String teamBResult, Date date,
                     Integer gameTime, String matchDate, String category) {
        super();
        this.teamA = teamA;
        this.teamB = teamB;
        this.teamAGoals = teamAGoals;
        this.teamBGoals = teamBGoals;
        this.teamAPossession = teamAPossession;
        this.teamBPossession = teamBPossession;
        this.teamAFouls = teamAFouls;
        this.teamBFouls = teamBFouls;
        this.teamAYellowCards = teamAYellowCards;
        this.teamBYellowCards = teamBYellowCards;
        this.teamARedCards = teamARedCards;
        this.teamBRedCards = teamBRedCards;
        this.teamAOffSides = teamAOffSides;
        this.teamBOffSides = teamBOffSides;
        this.teamACornerKicks = teamACornerKicks;
        this.teamBCornerKicks = teamBCornerKicks;
        this.teamASaves = teamASaves;
        this.teamBSaves = teamBSaves;
        this.teamAResult = teamAResult;
        this.teamBResult = teamBResult;
        this.date = date;
        this.gameTime = gameTime;
        this.matchDate = matchDate;
        this.category = category;
    }

    public String getTeamA() {
        return teamA;
    }

    public void setTeamA(String teamA) {
        this.teamA = teamA;
    }

    public String getTeamB() {
        return teamB;
    }

    public void setTeamB(String teamB) {
        this.teamB = teamB;
    }

    public Integer getTeamAGoals() {
        return teamAGoals;
    }

    public void setTeamAGoals(Integer teamAGoals) {
        this.teamAGoals = teamAGoals;
    }

    public Integer getTeamBGoals() {
        return teamBGoals;
    }

    public void setTeamBGoals(Integer teamBGoals) {
        this.teamBGoals = teamBGoals;
    }

    public Integer getTeamAPossession() {
        return teamAPossession;
    }

    public void setTeamAPossession(Integer teamAPossession) {
        this.teamAPossession = teamAPossession;
    }

    public Integer getTeamBPossession() {
        return teamBPossession;
    }

    public void setTeamBPossession(Integer teamBPossession) {
        this.teamBPossession = teamBPossession;
    }

    public Integer getTeamAFouls() {
        return teamAFouls;
    }

    public void setTeamAFouls(Integer teamAFouls) {
        this.teamAFouls = teamAFouls;
    }

    public Integer getTeamBFouls() {
        return teamBFouls;
    }

    public void setTeamBFouls(Integer teamBFouls) {
        this.teamBFouls = teamBFouls;
    }

    public Integer getTeamAYellowCards() {
        return teamAYellowCards;
    }

    public void setTeamAYellowCards(Integer teamAYellowCards) {
        this.teamAYellowCards = teamAYellowCards;
    }

    public Integer getTeamBYellowCards() {
        return teamBYellowCards;
    }

    public void setTeamBYellowCards(Integer teamBYellowCards) {
        this.teamBYellowCards = teamBYellowCards;
    }

    public Integer getTeamARedCards() {
        return teamARedCards;
    }

    public void setTeamARedCards(Integer teamARedCards) {
        this.teamARedCards = teamARedCards;
    }

    public Integer getTeamBRedCards() {
        return teamBRedCards;
    }

    public void setTeamBRedCards(Integer teamBRedCards) {
        this.teamBRedCards = teamBRedCards;
    }

    public Integer getTeamAOffSides() {
        return teamAOffSides;
    }

    public void setTeamAOffSides(Integer teamAOffSides) {
        this.teamAOffSides = teamAOffSides;
    }

    public Integer getTeamBOffSides() {
        return teamBOffSides;
    }

    public void setTeamBOffSides(Integer teamBOffSides) {
        this.teamBOffSides = teamBOffSides;
    }

    public Integer getTeamACornerKicks() {
        return teamACornerKicks;
    }

    public void setTeamACornerKicks(Integer teamACornerKicks) {
        this.teamACornerKicks = teamACornerKicks;
    }

    public Integer getTeamBCornerKicks() {
        return teamBCornerKicks;
    }

    public void setTeamBCornerKicks(Integer teamBCornerKicks) {
        this.teamBCornerKicks = teamBCornerKicks;
    }

    public Integer getTeamASaves() {
        return teamASaves;
    }

    public void setTeamASaves(Integer teamASaves) {
        this.teamASaves = teamASaves;
    }

    public Integer getTeamBSaves() {
        return teamBSaves;
    }

    public void setTeamBSaves(Integer teamBSaves) {
        this.teamBSaves = teamBSaves;
    }

    public String getTeamAResult() {
        return teamAResult;
    }

    public void setTeamAResult(String teamAResult) {
        this.teamAResult = teamAResult;
    }

    public String getTeamBResult() {
        return teamBResult;
    }

    public void setTeamBResult(String teamBResult) {
        this.teamBResult = teamBResult;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Integer getGameTime() {
        return gameTime;
    }

    public String getMatchDate() {
        return matchDate;
    }

    public void setMatchDate(String matchDate) {
        this.matchDate = matchDate;
    }

    public void setGameTime(Integer gameTime) {
        this.gameTime = gameTime;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}

