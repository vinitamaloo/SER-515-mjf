package com.ser.soccer.tournament.userProfiles;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("userProfileController")
@RequestMapping("/userProfile")
public class UserProfileController {
	@GetMapping("/getId/{userid}")
	public void getid(@PathVariable int userid)
	{

		System.out.println(userid);
	}


	@Autowired
	public UserProfileUsecase userProfileUsecase;

	@GetMapping("/get_user_profile/{userId}")
	public UserProfile getUserProfileById(@PathVariable String userId) {
		System.out.println(userId);
		return userProfileUsecase.getUserProfileById(userId);
	}
	
	@PostMapping("add_user_profile")
	public UserProfile addUserProfile(@RequestBody UserProfile userProfile) {
		return userProfileUsecase.addUserProfile(userProfile);
	}

	@GetMapping("update_user_profile/{userId}/{name}")
	public UserProfile getUpdateProfileById(@PathVariable String userId) {
		return userProfileUsecase.getUserProfileById(userId);
	}
}

 
