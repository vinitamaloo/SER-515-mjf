package com.ser.soccer.tournament.userProfiles;

import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("userProfileUsecase")
public class UserProfileUsecase {

	@Autowired
	private UserProfileRepo userProfileRepo;
	
	public UserProfile getUserProfileById(String userId) {
		return userProfileRepo.getById(userId);
	}

	public UserProfile addUserProfile(UserProfile userProfile) {
		userProfile.setId(UUID.randomUUID().toString());
		return userProfileRepo.add(userProfile);
	}
}
