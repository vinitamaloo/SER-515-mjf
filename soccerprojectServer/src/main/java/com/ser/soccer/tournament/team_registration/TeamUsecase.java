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

    public TeamRegister getTeamById(String teamId) {
        return teamRepo.getTeamById(teamId);
    }

    public List<TeamRegister> getAllTeams(TeamStatus teamStatus) {
        return teamRepo.getAllTeams(teamStatus);
    }

    public void changeTeamStatus(TeamRegister teamRegister) {
        teamRepo.changeTeamStatus(teamRegister);
    }
}
