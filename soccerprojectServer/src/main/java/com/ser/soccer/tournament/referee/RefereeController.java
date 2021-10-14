package com.ser.soccer.tournament.referee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController("refereeController")
@RequestMapping("/referee")
public class RefereeController {

    @Autowired
	public  RefereeUsecase refereeUsecase;

    @PostMapping("/add_referee")
	public Referee addReferee(@RequestBody Referee referee) {
		return refereeUsecase.addReferee(referee);
	}
    
}
