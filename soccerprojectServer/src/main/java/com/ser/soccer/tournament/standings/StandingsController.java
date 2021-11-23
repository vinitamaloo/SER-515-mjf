package com.ser.soccer.tournament.standings;

import com.ser.soccer.tournament.referee.ApplicationStatus;
import com.ser.soccer.tournament.referee.Referee;
import com.ser.soccer.tournament.referee.RefereeUsecase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController("standingsController")
@RequestMapping("/standings")
public class StandingsController {
    @Autowired
    public StandingsUsecase standingsUsecase;

    @PostMapping("/get_standings")
    public List<Standings> getStandingsByCategory(@RequestBody Standings standings) {
        return standingsUsecase.getStandingsByCategory(standings);
    }
}