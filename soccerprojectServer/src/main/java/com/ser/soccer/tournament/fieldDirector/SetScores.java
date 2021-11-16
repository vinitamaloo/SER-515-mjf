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
    int teamAGoals;
    int teamBGoals;
    int teamAPossession;
    int teamBPossession;
    int teamAFouls;
    int teamBFouls;
    int teamAYellowCards;
    int teamBYellowCards;
    int teamARedCards;
    int teamBRedCards;
    int teamAOffSides;
    int teamBOffSides;
    int teamACornerKicks;
    int teamBCornerKicks;
    int teamASaves;
    int teamBSaves;
    String teamAResult;
    String teamBResult;
    Date date;
    int gameTime;

    public SetScores(String teamA, String teamB, int teamAGoals,
            int teamBGoals, int teamAPossession, int teamBPossession,
            int teamAFouls, int teamBFouls, int teamAYellowCards,
            int teamBYellowCards, int teamARedCards, int teamBRedCards,
            int teamAOffSides, int teamBOffSides, int teamACornerKicks,
            int teamBCornerKicks, int teamASaves, int teamBSaves,
            String teamAResult, String teamBResult, Date date,
            int gameTime) {
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

    public int getTeamAGoals() {
        return teamAGoals;
    }

    public void setTeamAGoals(int teamAGoals) {
        this.teamAGoals = teamAGoals;
    }

    public int getTeamBGoals() {
        return teamBGoals;
    }

    public void setTeamBGoals(int teamBGoals) {
        this.teamBGoals = teamBGoals;
    }

    public int getTeamAPossession() {
        return teamAPossession;
    }

    public void setTeamAPossession(int teamAPossession) {
        this.teamAPossession = teamAPossession;
    }

    public int getTeamBPossession() {
        return teamBPossession;
    }

    public void setTeamBPossession(int teamBPossession) {
        this.teamBPossession = teamBPossession;
    }

    public int getTeamAFouls() {
        return teamAFouls;
    }

    public void setTeamAFouls(int teamAFouls) {
        this.teamAFouls = teamAFouls;
    }

    public int getTeamBFouls() {
        return teamBFouls;
    }

    public void setTeamBFouls(int teamBFouls) {
        this.teamBFouls = teamBFouls;
    }

    public int getTeamAYellowCards() {
        return teamAYellowCards;
    }

    public void setTeamAYellowCards(int teamAYellowCards) {
        this.teamAYellowCards = teamAYellowCards;
    }

    public int getTeamBYellowCards() {
        return teamBYellowCards;
    }

    public void setTeamBYellowCards(int teamBYellowCards) {
        this.teamBYellowCards = teamBYellowCards;
    }

    public int getTeamARedCards() {
        return teamARedCards;
    }

    public void setTeamARedCards(int teamARedCards) {
        this.teamARedCards = teamARedCards;
    }

    public int getTeamBRedCards() {
        return teamBRedCards;
    }

    public void setTeamBRedCards(int teamBRedCards) {
        this.teamBRedCards = teamBRedCards;
    }

    public int getTeamAOffSides() {
        return teamAOffSides;
    }

    public void setTeamAOffSides(int teamAOffSides) {
        this.teamAOffSides = teamAOffSides;
    }

    public int getTeamBOffSides() {
        return teamBOffSides;
    }

    public void setTeamBOffSides(int teamBOffSides) {
        this.teamBOffSides = teamBOffSides;
    }

    public int getTeamACornerKicks() {
        return teamACornerKicks;
    }

    public void setTeamACornerKicks(int teamACornerKicks) {
        this.teamACornerKicks = teamACornerKicks;
    }

    public int getTeamBCornerKicks() {
        return teamBCornerKicks;
    }

    public void setTeamBCornerKicks(int teamBCornerKicks) {
        this.teamBCornerKicks = teamBCornerKicks;
    }

    public int getTeamASaves() {
        return teamASaves;
    }

    public void setTeamASaves(int teamASaves) {
        this.teamASaves = teamASaves;
    }

    public int getTeamBSaves() {
        return teamBSaves;
    }

    public void setTeamBSaves(int teamBSaves) {
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

    public int getGameTime() {
        return gameTime;
    }

    public void setGameTime(int gameTime) {
        this.gameTime = gameTime;
    }
}

