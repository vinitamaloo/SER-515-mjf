/**
 *
 * @author Chandra Sekhar Sai Sampath Swaroop Atkuri
 *
 */

package com.ser.soccer.tournament.team_registration;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "teams")
public class TeamRegister {
    private String teamId;
    private String applicationGroup;
    private String teamName;
    private String teamCity;
    private String teamState;
    private String leagueAge;
    private String leagueGender;
    private String coachName;
    private String clubName;
    private String association;
    private String league;
    private String level;
    private String priJerseyClr;
    private String altJerseyClr;
    private String firstName;
    private String lastName;
    private String phone;
    private String email;
    private String address;
    private String city;
    private String state;
    private String zip;
    private String teamStatus;

    public TeamRegister(String teamId, String applicationGroup, String teamName, String teamCity,
                        String teamState, String leagueAge, String leagueGender,
                        String coachName, String clubName, String association,
                        String league, String level, String priJerseyClr,
                        String altJerseyClr, String firstName, String lastName,
                        String phone, String email, String address,
                        String city, String state, String zip) {
        this.teamId = teamId;
        this.applicationGroup = applicationGroup;
        this.teamName = teamName;
        this.teamCity = teamCity;
        this.teamState = teamState;
        this.leagueAge = leagueAge;
        this.leagueGender = leagueGender;
        this.coachName = coachName;
        this.clubName = clubName;
        this.association = association;
        this.league = league;
        this.level = level;
        this.priJerseyClr = priJerseyClr;
        this.altJerseyClr = altJerseyClr;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.teamStatus = "Not Registered";
    }

    public String getTeamId() {
        return teamId;
    }

    public void setTeamId(String teamId) {
        this.teamId = teamId;
    }

    public String getApplicationGroup() {
        return applicationGroup;
    }

    public void setApplicationGroup(String applicationGroup) {
        this.applicationGroup = applicationGroup;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public String getTeamCity() {
        return teamCity;
    }

    public void setTeamCity(String teamCity) {
        this.teamCity = teamCity;
    }

    public String getTeamState() {
        return teamState;
    }

    public void setTeamState(String teamState) {
        this.teamState = teamState;
    }

    public String getLeagueAge() {
        return leagueAge;
    }

    public void setLeagueAge(String leagueAge) {
        this.leagueAge = leagueAge;
    }

    public String getLeagueGender() {
        return leagueGender;
    }

    public void setLeagueGender(String leagueGender) {
        this.leagueGender = leagueGender;
    }

    public String getCoachName() {
        return coachName;
    }

    public void setCoachName(String coachName) {
        this.coachName = coachName;
    }

    public String getClubName() {
        return clubName;
    }

    public void setClubName(String clubName) {
        this.clubName = clubName;
    }

    public String getAssociation() {
        return association;
    }

    public void setAssociation(String association) {
        this.association = association;
    }

    public String getLeague() {
        return league;
    }

    public void setLeague(String league) {
        this.league = league;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getPriJerseyClr() {
        return priJerseyClr;
    }

    public void setPriJerseyClr(String priJerseyClr) {
        this.priJerseyClr = priJerseyClr;
    }

    public String getAltJerseyClr() {
        return altJerseyClr;
    }

    public void setAltJerseyClr(String altJerseyClr) {
        this.altJerseyClr = altJerseyClr;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getTeamStatus() {
        return teamStatus;
    }

    public void setTeamStatus(String teamStatus) {
        this.teamStatus = teamStatus;
    }
}