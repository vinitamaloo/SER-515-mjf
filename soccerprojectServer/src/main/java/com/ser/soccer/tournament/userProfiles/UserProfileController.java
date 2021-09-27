package com.ser.soccer.tournament.userProfiles;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("userProfileController")
@RequestMapping("/userProfile/")
public class UserProfileController {

	@Autowired
	public UserProfileUsecase userProfileUsecase;

	@GetMapping("get_user_profile/{userId}")
	public UserProfile getUserProfileById(@PathVariable String userId) {
		return userProfileUsecase.getUserProfileById(userId);
	}
	
	@PostMapping("add_user_profile")
	public UserProfile addUserProfile(@RequestBody UserProfile userProfile) {
		return userProfileUsecase.addUserProfile(userProfile);
	}

}

 
