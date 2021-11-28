package com.ser.soccer.tournament.team_registration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

@Service("teamUsecase")
public class TeamUsecase {

    @Autowired
    private TeamRepository teamRepo;

    private Random rand = new Random();

    private List<String> teamNames = Arrays.asList("En Fuego CF",
            "Rush Hour", "Hooligans FC", "Team Avengers", "Inter Real Hustlers FC", "Amigos",
            "Thunder", "Terminators", "Outkast", "Lazers", "In Shape Allstars", "Claustrophobic Mimes",
            "WeCanHasWin", "Barely Legal", "Booo Berries", "Elemonators", "Black Pack", "Chili Peppers",
            "Flirts", "Team Awesome", "Victorious Secret", "Sirens", "Lady Cougars", "Ladybugs United", "Celtic Ladies",
            "RazzMaTazz", "Lightning","Majestics", "Cheetahs", "Eagles", "Spitting Cobras", "Velociraptors", "Red Dragons", "Pandas", "Crows", "Panthers",
            "Wildcats", "Hilldogs", "Sharktooth Shooters", "Bears", "Unstoppable", "Alliance", "Collective", "Avengers",
            "Phenomenon", "Rumble", "Obliterators", "Lightning", "Assassins", "Outlaws", "End Game", "Rebels",
            "Force", "All-Stars", "Hustle", "Fuego", "Crew", "Peak Performers", "Arsenal", "Wrecking Crew Team",
            "Vikings", "Wild Things", "Pistols", "Trouble Makers", "Legends", "Samurais", "Titans", "Brigade",
            "Inferno", "Blaze", "Ninjas", "Brute Force", "Squad", "Gladiators", "Unbeatable", "Rough Necks",
            "Guardians", "Bannermen", "Savage Joes", "Lethal Weapons", "Bandits", "Regulators", "Revolution",
            "Champions", "Hot Shots", "Chosen Ones", "Magic", "Naturals", "Goal Diggers", "Your Worst Nightmare",
            "Status Quo", "Thrashers", "Wolf Pack", "Weapons of Mass Destruction", "Heatwave", "Empire", "Blitz",
            "Extreme", "Power", "Justice League", "Mystery", "Rage", "Elite", "Horsepower", "Rule Breakers", "Unstoppable",
            "Alliance", "Collective", "Avengers", "Phenomenon", "Rumble", "Obliterators", "Lightning", "Assassins",
            "Outlaws", "End Game", "Rebels", "Force", "All-Stars", "Hustle", "Fuego", "Crew", "Peak Performers", "Arsenal",
            "Wrecking Crew Team", "Vikings", "Wild Things", "Pistols", "Trouble Makers", "Legends", "Samurais", "Titans",
            "Brigade", "Inferno", "Blaze", "Ninjas", "Brute Force", "Squad", "Gladiators", "Unbeatable", "Rough Necks",
            "Guardians", "Bannermen", "Savage Joes", "Lethal Weapons", "Bandits", "Regulators", "Revolution",
            "Champions", "Hot Shots", "Chosen Ones", "Magic", "Naturals", "Goal Diggers", "Your Worst Nightmare", "Status Quo",
            "Thrashers", "Wolf Pack", "Weapons of Mass Destruction", "Heatwave", "Empire", "Blitz",
            "Extreme", "Power", "Justice League", "Mystery", "Rage", "Elite", "Horsepower", "Rule Breakers",
            "The Regulars", "Manchester", "Volunteers", "Miscellaneous", "Fat Married People", "Queens",
            "Frog Legs", "Handball", "Hot Tamales", "The Hangovers", "Spartans", "All Net",
            "Couch Potatoes", "Nightmares", "Own Goal", "Blue Raiders", "The Codpieces", "Spunkies",
            "Look Ma, No Hands", "Nerds F.C.", "Arseanal", "No Longer Noobs", "Tornado",
            "Semen Padang F.C.", "No Punt Intended", "Club Always Ready", "Divided", "Crystal Meth Palace",
            "Hustlers", "Ice Breakers", "White Lightning", "Razorbacks", "Marauders", "Barely Legal",
            "Dyslexia United", "The Receding Hairlines", "Portman Kunis FC", "Salsa", "The Practice Squad",
            "Kingsmen", "Badasses", "Best of the Best", "Terminators", "United", "Vicious", "Matrix", "Renegades",
            "Impact", "Defenders", "Dothraki", "Monarchy", "Intimidators", "Shakedown", "Adrenaline", "Bosses",
            "Ringmasters", "Stealth", "Phoenix", "Heathens", "No Sympathy", "Dream Team", "Icons",
            "Hitmen", "Dominators", "Riot", "Armada", "Ironmen", "Masters", "Aces",
            "Venom", "No Fear", "Mafia", "Fury", "Keep It 100", "Calvary", "Tribe", "Rampage",
            "Amigos", "Warriors", "Conquerors", "High Voltage", "Chaos", "Maniacs", "Pulverizers");

    private List<String> agrGroups = Arrays.asList("U08", "U09", "U10", "U11",
        "U12", "U13", "U14", "U15", "U16", "U17", "U18", "U19");

    public TeamRegister addTeam(TeamRegister teamRegister) {
        return teamRepo.add(teamRegister);
    }

    public TeamRegister getTeamById(String teamId) {
        return teamRepo.getTeamById(teamId);
    }

    public List<TeamRegister> getAllTeams(TeamStatus teamStatus) {
        return teamRepo.getAllTeams(teamStatus);
    }

    public void changeTeamStatus(TeamRegister teamRegister) {
        teamRepo.changeTeamStatus(teamRegister);
    }

    public void createTeams(TeamRegister teamRegister, String ageGroup, String gender, int counter) {
        teamRegister.applicationGroup = gender+ageGroup;
        teamRegister.teamId = "team"+counter;
        teamRegister.leagueAge = ageGroup;

        for (int i = 0; i < 10; ++i) {
            int k = rand.nextInt(teamNames.size());
            teamRegister.teamName = teamNames.get(k);

            addTeam(teamRegister);
            counter++;
            teamRegister.teamId = "team"+counter;
        }
    }

    public void createTeamPerAgeGroup(TeamRegister teamRegister, String gender, int counter) {
        for (int i = 0; i < agrGroups.size(); ++i) {
            createTeams(teamRegister, agrGroups.get(i), gender, counter);
        }
    }

    public void createTeamPerGender() {
        int counter = 5000;
        TeamRegister teamRegister = new TeamRegister();
        teamRegister.teamCity = "Tempe";
        teamRegister.teamState = "AZ";
        teamRegister.coachName = "Joseph Henry";
        teamRegister.clubName = "Calm Dolphins";
        teamRegister.association = "Alaska";
        teamRegister.league = "BPL";
        teamRegister.level = "Upper";
        teamRegister.priJerseyClr = "Orange";
        teamRegister.altJerseyClr = "Red";
        teamRegister.firstName = "Joseph";
        teamRegister.lastName = "Henry";
        teamRegister.phone = "+1-480-123-3333";
        teamRegister.email = "calmdolphins@gmail.com";
        teamRegister.address = "1712 South park, downtown";
        teamRegister.city = "Tempe";
        teamRegister.state = "AZ";
        teamRegister.zip = "85281";
        teamRegister.teamStatus = "Not Registered";

        createTeamPerAgeGroup(teamRegister, "boys", counter);
        createTeamPerAgeGroup(teamRegister,"girls", counter + 100);
    }
}
