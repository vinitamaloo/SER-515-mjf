package com.ser.soccer.tournament.schedular;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("venueService")
public class FieldService {

	@Autowired
	private FieldRepo venueRepo;
	
	public List<Field> getFields() {
		return venueRepo.getFields();
	}

	
}
