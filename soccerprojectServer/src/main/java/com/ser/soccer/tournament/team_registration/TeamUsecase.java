package com.ser.soccer.tournament.team_registration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("teamUsecase")
public class TeamUsecase {
    @Autowired
    private TeamRepository teamRepo;

    public TeamRegister addTeam(TeamRegister teamRegister) {
        return teamRepo.add(teamRegister);
    }
}