package com.ser.soccer.tournament.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


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

	@GetMapping("/getAllUsers")
	public List<Admin> getAllUsers() {
		return adminUsecase.getAll();
	}

	@PostMapping("/addAdmin")
	public Admin addReferee(@RequestBody Admin admin) {
		return adminUsecase.addAdmin(admin);
	}

	@PostMapping("/removeAdmin")
	public void removeAdmin(@RequestBody Admin admin) {
		adminUsecase.removeAdmins(admin);
	}

}
