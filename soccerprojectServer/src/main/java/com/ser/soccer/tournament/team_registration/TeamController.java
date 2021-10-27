package com.ser.soccer.tournament.team_registration;

import com.ser.soccer.tournament.team_registration.TeamRegister;
import com.ser.soccer.tournament.team_registration.TeamUsecase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController("teamController")
@RequestMapping("/teamRegistration")
public class TeamController {
    @Autowired
    public TeamUsecase teamUsecase;

    @PostMapping("/teamRegister")
    public TeamRegister addTeam(@RequestBody TeamRegister teamRegister) {
        return teamUsecase.addTeam(teamRegister);
    }

}