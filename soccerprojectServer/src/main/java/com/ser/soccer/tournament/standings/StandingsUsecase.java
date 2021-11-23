package com.ser.soccer.tournament.standings;

import com.ser.soccer.tournament.referee.Referee;
import com.ser.soccer.tournament.referee.RefereeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("standingsUsecase")
public class StandingsUsecase {

    @Autowired
    private StandingsRepository standingsRepository;

    public List<Standings> getStandingsByCategory(Standings standings) {
        return standingsRepository.getStandingsByCategory(standings);
    }
}
