package com.ser.soccer.tournament.userRole;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ser.soccer.tournament.response.ResponseEntity;
import com.ser.soccer.tournament.response.ResponseStatus;

@RestController("userRoleController")
@RequestMapping("/userRole/")
public class UserRoleController {

	@Autowired
	public UserRoleUsecase userRoleUsecase;

	@GetMapping("get_user_role/{userId}")
	public UserRole getUserRoleById(@PathVariable String userId) {
		System.out.println("Hello");
		return userRoleUsecase.getUserRoleById(userId);
	}
	
	@PostMapping("add_user_role")
	public ResponseEntity addUserRole(@RequestBody UserRole userRole) {
		UserRole role = userRoleUsecase.addUserRole(userRole);
		if (role == null)
			return new ResponseEntity(ResponseStatus.STATUS_NO_DATA, "Data not added");
		
		return new ResponseEntity(ResponseStatus.STATUS_OK, "Data added Successfully");
	}

}
