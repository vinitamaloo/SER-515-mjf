package com.ser.soccer.tournament.team_registration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("teamUsecase")
public class TeamUsecase {
    @Autowired
    private TeamRepository teamRepo;

    public TeamRegister addTeam(TeamRegister teamRegister) {
        return teamRepo.add(teamRegister);
    }

    public List<TeamRegister> getTeamById(TeamRegister teamRegister) {
        System.out.println("Team Name: "+teamRegister.getTeamName());
        return teamRepo.getTeamById(teamRegister);
    }
    public void changeTeamStatus(TeamRegister teamRegister) {
        teamRepo.changeTeamStatus(teamRegister);
    }
}