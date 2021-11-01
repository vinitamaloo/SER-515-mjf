package com.ser.soccer.tournament.fieldDirector;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
}
