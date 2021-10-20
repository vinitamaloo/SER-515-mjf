package com.ser.soccer.tournament.referee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("refereeUsecase")
public class RefereeUsecase {
    
    @Autowired
	private RefereeRepository refereeRepo;

    public Referee addReferee(Referee referee) {
		return refereeRepo.add(referee);
	}
}


