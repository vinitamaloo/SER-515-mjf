package com.ser.soccer.tournament.fieldDirector;

import com.ser.soccer.tournament.schedular.Match;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController("setScoresController")
@RequestMapping("/setScores")
public class SetScoresController {
    @Autowired
    public SetScoresUsecase setScoresUsecase;

    @PostMapping("/add_set_scores")
    public SetScores addSetScores(@RequestBody SetScores setScores) {
        if (setScores.getDate() != null) {
            DateFormat formatter = new SimpleDateFormat("MM/dd/yyyy");
            setScores.setMatchDate(formatter.format(setScores.getDate()));
        }
        return setScoresUsecase.addSetScores(setScores);
    }

    @PostMapping("/getAll")
    public List<SetScores> getAll(@RequestBody FilterPojo filter) {
        if (filter.getDate() != null) {
            DateFormat formatter = new SimpleDateFormat("MM/dd/yyyy");
            filter.setMatchDate(formatter.format(filter.getDate()));
            System.out.println(filter.getMatchDate());
        }

        return setScoresUsecase.getAll(filter);
    }
}
