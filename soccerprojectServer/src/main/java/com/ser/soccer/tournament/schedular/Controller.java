package com.ser.soccer.tournament.schedular;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ser.soccer.tournament.team_registration.TeamRegister;

@CrossOrigin(origins = "http://localhost:3000")
@RestController

public class Controller {
    @Autowired
    public TeamsService teamsService;
    @Autowired
    public FieldService venueService;
    @Autowired
    public ScheduleService scheduleService;

    @RequestMapping(value = "/run")
    public HashMap<String, ArrayList<Match>> getUser() {
        String tournamentName = "Soccer Tournament";
//        int totalTeams = 4;
//        int totVenues = 3;
//        String category = "U19M";
        Date date = null;
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("dd/mm/yyyy");

            /* Following is a deprecated method/way of initializing a Date object */
            // date = new Date("01/01/2016");

            // date = (Date) sdf.parse("01/01/2016");
            date = sdf.parse("01/01/2022");

        } catch (ParseException e) {
            System.out.println("Error in Parsing Date");
            // e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("Program aborted !!");
            // return;
        }

        HashMap<String, ArrayList<Match>> schedule = new HashMap<String, ArrayList<Match>>();

        List<TeamByCategory> list = teamsService.getTeamsByCategory();

        for (TeamByCategory tp : list) {
            List<Field> fields = venueService.getFields(tp.getId());
            if (fields.size() == 0)
                continue;
            Tournament tournament = new Tournament(tournamentName, tp.getTeams().size(), fields.size(), date);
            for (Field f : fields) {
                tournament.addVenue(f.getField());
            }
            for (TeamRegister team : tp.getTeams()) {
                tournament.addTeam(team.getTeamName());
            }
            int totRounds = 2;
            tournament.setNumberOfRounds(totRounds);
            ArrayList<Match> matches = tournament.getMatches();
            schedule.put(tp.getId(), matches);
            scheduleService.delete(tp.getId());
            scheduleService.save(new Schedule(tp.getId(), matches));
            System.out.println("\n****\t" + tournament.getTournamentName() + "\t****\n");
            System.out.println(tp.getId());
            System.out.print("Tournament beginning date: ");
            if (date != null)
                System.out.println(MyDateParser.toString(date));
            System.out.println("");

            for (Match m : matches) {
                System.out.println(m.toString());
            }
            // scheduleService.save(schedule);
        }

        return schedule;

    }

    @RequestMapping(value = "/getSchedule")
    public List<Schedule> getSchedule() {
        return scheduleService.getSchedule();
    }

}