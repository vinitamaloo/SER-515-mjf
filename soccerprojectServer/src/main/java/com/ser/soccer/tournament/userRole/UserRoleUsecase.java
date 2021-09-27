package com.ser.soccer.tournament.userRole;

import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("userRoleUsecase")
public class UserRoleUsecase {

	@Autowired
	private UserRoleRepo userRoleRepo;
	
	public UserRole getUserRoleById(String userId) {
		return userRoleRepo.getById(userId);
	}

	public UserRole addUserRole(UserRole userRole) {
		userRole.setId(UUID.randomUUID().toString());
		userRole.setCreatedOn(new Date());
		userRole.setModifiedOn(new Date());
		return userRoleRepo.add(userRole);
	}
}
