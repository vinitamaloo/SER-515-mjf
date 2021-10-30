package com.ser.soccer.tournament.referee;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("refereeUsecase")
public class RefereeUsecase {
    
    /**
	 *
	 */
	private static final String ACCEPT = "Accept";
	@Autowired
	private RefereeRepository refereeRepo;

    public Referee addReferee(Referee referee) {
		referee.setApplication("In Progress");
		return refereeRepo.add(referee);
	}

	public List<Referee> getRefereeByApplication(String application) {
		return refereeRepo.getByApplication(application);
	}
	public List<Referee> getRefereeByApplicationd(String application) {
		return refereeRepo.getByApplication(ACCEPT);
	}
	public Referee getRefereeByEmail(String email) {
		return refereeRepo.getByEmail(email);
	}

	public void UpdateRefereeByEmail(ApplicationStatus application) {
		refereeRepo.updateByEmail(application);
	}
}


