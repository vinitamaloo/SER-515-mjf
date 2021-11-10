package com.ser.soccer.tournament.fieldDirector;

import com.ser.soccer.tournament.schedular.Match;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController("setScoresController")
@RequestMapping("/setScores")
public class SetScoresController {
    @Autowired
    public SetScoresUsecase setScoresUsecase;

    @PostMapping("/add_set_scores")
    public SetScores addSetScores(@RequestBody SetScores setScores) {
        return setScoresUsecase.addSetScores(setScores);
    }

    @PostMapping("/getAll")
    public List<Match> getAll(@RequestBody FilterPojo filter) {
        return setScoresUsecase.getAll(filter);
    }
}
