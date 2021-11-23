package com.ser.soccer.tournament.schedular;

import java.util.List;

import com.ser.soccer.tournament.team_registration.TeamRegister;

public class TeamByCategory {
    private String id;
    private List<TeamRegister> teams;

    public TeamByCategory(String id, List<TeamRegister> teams) {
        super();
        this.id = id;
        this.teams = teams;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public List<TeamRegister> getTeams() {
        return teams;
    }

    public void setTeams(List<TeamRegister> teams) {
        this.teams = teams;
    }

}
