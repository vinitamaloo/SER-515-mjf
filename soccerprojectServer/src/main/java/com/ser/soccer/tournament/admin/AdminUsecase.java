package com.ser.soccer.tournament.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("adminUsecase")
public class AdminUsecase {

	@Autowired
	private AdminRepo adminRepo;
	
	public Admin getByUsername(Admin admin) {
		return adminRepo.getByUsername(admin);
	}

	
}