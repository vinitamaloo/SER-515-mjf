package com.ser.soccer.tournament.team_registration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController("teamController")
@RequestMapping("/teamRegistration")
public class TeamController {
    @Autowired
    public TeamUsecase teamUsecase;

    @PostMapping("/add_teams")
    public TeamRegister addTeam(@RequestBody TeamRegister teamRegister) {
        System.out.println(teamRegister);
        return teamUsecase.addTeam(teamRegister);
    }

}