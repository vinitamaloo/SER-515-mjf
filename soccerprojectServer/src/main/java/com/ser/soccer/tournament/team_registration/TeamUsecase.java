package com.ser.soccer.tournament.team_registration;

import com.ser.soccer.tournament.team_registration.TeamRegister;
import com.ser.soccer.tournament.team_registration.TeamRepository;
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