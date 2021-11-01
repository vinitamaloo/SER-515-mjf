package com.ser.soccer.tournament.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ser.soccer.tournament.response.ResponseEntity;
import com.ser.soccer.tournament.response.ResponseStatus;
@CrossOrigin(origins = "http://localhost:3000")
@RestController("adminController")
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	public AdminUsecase adminUsecase;

	@RequestMapping(value = "/getUser")
	@ResponseBody
	public Admin getUser(@RequestBody Admin admin) {
		
		Admin a = adminUsecase.getByUsername(admin);
		return a;
		// if (a == null)
		// 	return new ResponseEntity(ResponseStatus.STATUS_NO_DATA, "Invalid User");
		
		// return new ResponseEntity(ResponseStatus.STATUS_OK, "Successfull Login");
	}

}
