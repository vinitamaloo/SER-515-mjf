package com.ser.soccer.tournament.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("adminUsecase")
public class AdminUsecase {

	@Autowired
	private AdminRepo adminRepo;
	
	public Admin getByUsername(Admin admin) {
		return adminRepo.getByUsername(admin);
	}

	public List<Admin> getAll() {
		return adminRepo.getAll();
	}

	public Admin addAdmin(Admin admin) {
		return adminRepo.add(admin);
	}

	public void removeAdmins(Admin admin) {
		adminRepo.remove(admin);
	}
	
}