package com.ser.soccer.tournament.fieldDirector;

import com.ser.soccer.tournament.referee.Referee;
import com.ser.soccer.tournament.referee.RefereeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("setScoresUsecase")
public class SetScoresUsecase {
    @Autowired
    private SetScoresRepository setScoresRepository;

    public SetScores addSetScores(SetScores setScores) {
        return setScoresRepository.add(setScores);
    }
}
