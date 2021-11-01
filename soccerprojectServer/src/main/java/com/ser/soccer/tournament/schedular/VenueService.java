package com.ser.soccer.tournament.schedular;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("venueService")
public class VenueService {

	@Autowired
	private VenueRepo venueRepo;
	
	public List<VenuePojo> getTeams() {
		return venueRepo.getVenues();
	}

	
}
