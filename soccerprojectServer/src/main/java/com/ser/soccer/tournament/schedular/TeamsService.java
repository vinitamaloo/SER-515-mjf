package com.ser.soccer.tournament.schedular;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("teamsService")
public class TeamsService {

    @Autowired
    private TeamsRepo teamsRepo;

    public List<TeamByCategory> getTeams(String category) {
        return teamsRepo.getTeams(category);
    }

    public List<TeamByCategory> getTeamsByCategory() {
        return teamsRepo.getTeamsByCategory();
    }

}
