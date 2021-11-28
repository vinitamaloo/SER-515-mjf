package com.ser.soccer.tournament.team_registration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/get_team_data/{teamId}")
    public TeamRegister getTeamById(@PathVariable String teamId) {
        return teamUsecase.getTeamById(teamId);
    }

    @PostMapping("/change_team_status")
    public void changeTeamStatus(@RequestBody TeamRegister teamRegister) {
        teamUsecase.changeTeamStatus(teamRegister);
    }

    @GetMapping("/get_all_data")
    public List<TeamRegister> getAllTeams(@RequestBody TeamStatus teamStatus) {
        return teamUsecase.getAllTeams(teamStatus);
    }

    @GetMapping("/create_all_teams")
    public void createTeams() {
        teamUsecase.createTeamPerGender();
    }

}
