package com.ser.soccer.tournament.fieldDirector;

import com.ser.soccer.tournament.schedular.Match;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.logging.Filter;

@Service("setScoresUsecase")
public class SetScoresUsecase {
    @Autowired
    private SetScoresRepository setScoresRepository;

    public SetScores addSetScores(SetScores setScores) {
        return setScoresRepository.add(setScores);
    }

    public List<SetScores> getAll(FilterPojo filter) {
        return setScoresRepository.getAll(filter);
    }
}
