package com.ser.soccer.tournament.schedular;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:3000")
@RestController

public class Controller {
	@Autowired
	public TeamsService teamsService;
	@Autowired
	public VenueService venueService;
	@RequestMapping(value = "/run")
	public ArrayList<Match> getUser() {
		String tournamentName = "Soccer Tournament";
		int totalTeams = 4;
		int totVenues = 3;
		String category = "U19M";
		Date date=null;
		try {
		SimpleDateFormat sdf = new SimpleDateFormat("dd/mm/yyyy");
		
		/* Following is a deprecated method/way of initializing a Date object */
		// date = new Date("01/01/2016");
		
		
		// date = (Date) sdf.parse("01/01/2016");
		date = sdf.parse("01/01/2022");
		
		} catch (ParseException e) {
			System.out.println("Error in Parsing Date");
			//	e.printStackTrace();
		}
		catch (Exception e){
			e.printStackTrace();
			System.out.println("Program aborted !!");
			// return;
		}
		
		Tournament tournament = new Tournament (tournamentName,totalTeams, totVenues, date, category); 
		List<TeamPojo> teamslist = teamsService.getTeams(category);
		for(TeamPojo t:teamslist) {
			tournament.addTeam(t.getName());
		}
//		tournament.addTeam("India");
//		tournament.addTeam("Australia");
//		tournament.addTeam("South Africa");
//		tournament.addTeam("West Indies");
//		tournament.addTeam("Ireland");
//		tournament.addTeam("Canada");
//		tournament.addTeam("New Zealand");
//		tournament.addTeam("Sri Lanka");
		
		List<VenuePojo> venues = venueService.getTeams();
		for(VenuePojo m : venues){
			tournament.addVenue(m.getLocation());
		}
//		tournament.addVenue("Sydney");
//		tournament.addVenue("Adelaide");
//		tournament.addVenue("Hobart");
//		tournament.addVenue("Perth");
		
		int totRounds = 2;
		tournament.setNumberOfRounds(totRounds);

		
		ArrayList<Match> matches= tournament.getMatches();
		
		System.out.println("\n****\t" + tournament.getTournamentName() + "\t****\n");
		System.out.print("Tournament beginning date: ");
		if(date!=null)
			System.out.println(MyDateParser.toString(date));
		System.out.println("");
		
		for(Match m : matches){
			System.out.println(m.toString());
		}
		
		return matches;
	
	}

}