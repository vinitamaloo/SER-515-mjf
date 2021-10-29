package com.ser.soccer.tournament.schedular;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("teamsService")
public class TeamsService {

	@Autowired
	private TeamsRepo teamsRepo;
	
	public List<TeamPojo> getTeams(String category) {
		return teamsRepo.getTeams(category);
	}

	
}
