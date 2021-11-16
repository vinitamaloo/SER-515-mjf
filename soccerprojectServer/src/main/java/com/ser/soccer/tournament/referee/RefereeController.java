package com.ser.soccer.tournament.referee;

import java.util.List;

import com.ser.soccer.tournament.Fields.UpdateReferee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


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

    @PostMapping("/get_all_in_progress")
	public List<Referee> getRefereeByApplication(@RequestBody ApplicationStatus application) {
		return refereeUsecase.getRefereeByApplication(application.getApplication());
	}
	
	@GetMapping("/get_accepted")
	public List<Referee> get() {
//		if (referee.getIsAssigned() == "False" ){
			return refereeUsecase.getAccepted("Accept");
//		}
//		return null;
	}

	@PostMapping("/particularreferee")
	public Referee getRefereeByEmail(@RequestBody ApplicationStatus email) {
		return refereeUsecase.getRefereeByEmail(email.getEmail());
	}

	@PostMapping("/updateappstatus")
	public void UpdateRefereeByEmail(@RequestBody ApplicationStatus application) {
		refereeUsecase.UpdateRefereeByEmail(application);
	}

	@PostMapping("/updaterefereestatus")
	public void UpdateRefereeStatusByName(@RequestBody UpdateReferee updateReferee) {
		System.out.println("this is referee controller update refereestatus api" + " " + updateReferee.refereeEmail);
		refereeUsecase.UpdateStatusByEmail(updateReferee.refereeEmail);

	}


	}

