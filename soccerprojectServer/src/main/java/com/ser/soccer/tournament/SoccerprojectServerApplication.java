package com.ser.soccer.tournament;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableAutoConfiguration
public class SoccerprojectServerApplication {

	public static void main(String[] args) {
		System.setProperty("java.net.preferIPv4Stack" , "true");
		SpringApplication.run(SoccerprojectServerApplication.class, args);
	}
	
}
