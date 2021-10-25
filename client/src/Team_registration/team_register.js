import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import { Link, Redirect } from "react-router-dom";
import { postTeamData } from '../api/services';
import "./team_register.css";

export default function TeamRegistration() {

    const [applicationGroup, setApplicationGroup] = useState("");
    const [teamName, setTeamName] = useState("");
    const [teamCity, setTeamCity] = useState("");
    const [teamState, setTeamState] = useState("");

    const [leagueAge, setLeagueAge] = useState("");
    const [leagueGender, setLeagueGender] = useState("");
    const [coachName, setCoachName] = useState("");
    const [clubName, setClubName] = useState("");
    const [association, setAssociation] = useState("");
    const [league, setLeague] = useState("");
    const [level, setLevel] = useState("");

    const [priJerseyClr, setPriJerseyClr] = useState("");
    const [altJerseyClr, setAltJerseyClr] = useState("");

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    /*Errors*/
//    const [phoneError, setPhoneError] = useState("");
//    const [isValid, setValid] = useState(false);

   async function handleSubmit(event) {
        event.preventDefault();

        let teamData = {
            "applicationGroup": applicationGroup,
            "teamName" : teamName,
            "teamCity" : teamCity,
            "teamState" : teamState,
            "leagueAge" : leagueAge,
            "leagueGender" : leagueGender,
            "coachName" : coachName,
            "clubName" : clubName,
            "association" : association,
            "league" : league,
            "level" : level,
            "priJerseyClr" : priJerseyClr,
            "altJerseyClr" : altJerseyClr,
            "firstName" : firstName,
            "lastName" : lastName,
            "phone" :phone,
            "email" : email,
            "address" : address,
            "city" : city,
            "state" : state,
            "zip" : zip
        }

        let x = await postTeamData(teamData);
        console.log(x);
    }
//    useEffect(() => {
//        setAppState({ loading: true });
//        fetch()
//          .then((res) => res.json())
//          .then((repos) => {
//            setAppState({ loading: false, repos: repos });
//          });
//    }, [setAppState]);


//    function validate() {
//        var pattern = new RegExp(/^[0-9\b]+$/);
//        setPhoneError("");
//        if(phone.length < 10 || !pattern.test(phone)) {
//            setPhoneError("Please enter a valid Phone Number!!");
//            setValid(false);
//            return isValid;
//        }
//
//        return true;
//    }

    return (
        <body>
          <div className="registration-inner">
            <h6 className='central_heading'>Apply for team registration!</h6>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="d-flex" controlId="application_group">
                    <Form.Label className='formLabel'>Application Group*</Form.Label>
                    <Form.Select aria-label="ApplicationGroup"
                        value={applicationGroup}
                        className="formControl"
                        autoFocus
                        required as="select"
                        onChange={(e) => setApplicationGroup(e.target.value)}>
                        <option value=""></option>
                        <option value="boysU08">BoysU08</option>
                        <option value="boysU09">BoysU09</option>
                        <option value="girlsU08">GirlsU08</option>
                    </Form.Select>
                </Form.Group>
                 <Form.Group className="d-flex" controlId="team_name">
                    <Form.Label className='formLabel'>Team Name*</Form.Label>
                    <Form.Control
                     required
                     type="text"
                     className="formControl"
                     placeHolder="Enter your team name"
                     aria-label="teamName"
                     value={teamName}
                     onChange={(e) => setTeamName(e.target.value)}/>
                </Form.Group>
                 <Form.Group className="d-flex" controlId="team_details">
                    <Form.Label className='formLabel'>Team City*</Form.Label>
                    <Form.Control
                     type="text"
                     className='formControl'
                     required
                     aria-label="teamCity"
                     value={teamCity}
                     onChange={(e) => setTeamCity(e.target.value)}/>

                    <Form.Label className='formLabelDouble'>Team State*</Form.Label>
                    <Form.Control
                     required
                     className='formControl'
                     type="text"
                     aria-label="teamState"
                     value={teamState}
                     onChange={(e) => setTeamState(e.target.value)}/>
                </Form.Group>
                <Form.Group className="d-flex" controlId="age_group">
                    <Form.Label className='formLabel'>Age group*</Form.Label>
                    <Form.Select aria-label="leagueAge"
                        required as="select"
                        className='formControl'
                        value={leagueAge}
                        onChange={(e) => setLeagueAge(e.target.value)}>
                        <option value=""></option>
                        <option value="U08">U08</option>
                        <option value="U09">U09</option>
                        <option value="U10">U10</option>
                    </Form.Select>

                    <Form.Label className='formLabelDouble'>Gender*</Form.Label>
                    <Form.Select aria-label="gender"
                        required as="select"
                        className='formControl'
                        value={leagueGender}
                        onChange={(e) => setLeagueGender(e.target.value)}>
                        <option value=""></option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                    </Form.Select>
                </Form.Group>
                 <Form.Group className="d-flex" controlId="coach_name">
                    <Form.Label className='formLabel'>Coach Name*</Form.Label>
                    <Form.Control
                     required
                     className='formControl'
                     type="text"
                     placeHolder="Enter coach name"
                     aria-label="coachName"
                     value={coachName}
                     onChange={(e) => setCoachName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="d-flex" controlId="club_name">
                    <Form.Label className='formLabel'>Club Name*</Form.Label>
                    <Form.Select aria-label="clubName"
                        required as="select"
                        className='formControl'
                        value={clubName}
                        onChange={(e) => setClubName(e.target.value)}>
                        <option value=""></option>
                        <option value="Arizona state club">Arizona state club</option>
                        <option value="Cincinati State club">Cincinati State club</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="d-flex" controlId="league_details">
                    <Form.Label className='formLabel'>Association*</Form.Label>
                    <Form.Select aria-label="association"
                        value={association}
                        required as="select"
                        className='formControl'
                        onChange={(e) => setAssociation(e.target.value)}>
                        <option value=""></option>
                        <option value="Arizona">Arizona</option>
                        <option value="Cincinati">Cincinati</option>
                        <option value="Alkansa">Alkansa</option>
                    </Form.Select>

                    <Form.Label className='formLabelDouble'>League*</Form.Label>
                    <Form.Select aria-label="league"
                        required as="select"
                        value={league}
                        className='formControl'
                        onChange={(e) => setLeague(e.target.value)}>
                        <option value=""></option>
                        <option value="BPL">BPL</option>
                        <option value="BPYSL">BPYSL</option>
                        <option value="Buckeye premier league">Buckeye premier league</option>
                        <option value="Buckeye premier league 2">Buckeye premier league 2</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="d-flex" controlId="Play_level">
                    <Form.Label className='formLabel'>Level*</Form.Label>
                    <Form.Select aria-label="Level"
                        required as="select"
                        value={level}
                        className='formControl'
                        onChange={(e) => setLevel(e.target.value)}>
                        <option value=""></option>
                        <option value="Upper">Upper</option>
                        <option value="Lower">Lower</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="d-flex" controlId="primary_jersey">
                    <Form.Label className='formLabel'>Primary jersey Color*</Form.Label>
                    <Form.Select aria-label="primaryColor"
                        required as="select"
                        value={priJerseyClr}
                        className='formControl'
                        onChange={(e) => setPriJerseyClr(e.target.value)}>
                        <option value=""></option>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                    </Form.Select>

                    <Form.Label className='formLabelDouble'>Alt jersey Color*</Form.Label>
                        <Form.Select aria-label="altColor"
                            required as="select"
                            value={altJerseyClr}
                            className='formControl'
                            onChange={(e) => setAltJerseyClr(e.target.value)}>
                            <option value=""></option>
                            <option value="red">Red</option>
                            <option value="orange">Orange</option>
                        </Form.Select>
                </Form.Group>
                <div className='central_heading'><h6>Primary contact information</h6></div>
                <Form.Group className="d-flex" controlId="primary_contact_info">
                    <Form.Label className='formLabel'>First Name*</Form.Label>
                    <Form.Control
                     required
                     className='formControl'
                     type="text"
                     aria-label="firstName"
                     value={firstName}
                     onChange={(e) => setFirstName(e.target.value)}/>

                     <Form.Label className='formLabelDouble'>Last Name*</Form.Label>
                     <Form.Control
                      required
                      className='formControl'
                      type="text"
                      aria-label="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}/>
                </Form.Group>

                <Form.Group className="d-flex" controlId="contact_details">
                   <Form.Label className='formLabel'>Phone*</Form.Label>
                   <Form.Control
                      required
                      className='formControl'
                      type="number"
                      aria-label="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}/>
                  <Form.Label className='formLabelDouble'>Email*</Form.Label>
                  <Form.Control
                    placeHolder="email@example.com"
                    required
                    className='formControl'
                    type="email"
                    aria-label="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group className="d-flex" controlId="address_details">
                  <Form.Label className='formLabel'>Address*</Form.Label>
                  <Form.Control
                    required
                    className='formControl'
                    type="text"
                    aria-label="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}/>
                </Form.Group>

                <Form.Group className="d-flex" controlId="city_details">
                  <Form.Label className='formLabel'>City*</Form.Label>
                  <Form.Control
                    required
                    className='formControl'
                    type="text"
                    aria-label="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}/>

                  <Form.Label className='formLabelDouble'>State*</Form.Label>
                  <Form.Control
                    required
                    className='formControl'
                    type="text"
                    aria-label="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}/>
                </Form.Group>

                <Form.Group className="d-flex" controlId="zip">
                  <Form.Label className='formLabel'>Zip*</Form.Label>
                  <Form.Control
                    required
                    className='formControl'
                    type="number"
                    aria-label="zip"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="t&c">
                    <Form.Check required type="checkbox" label="Agree to the terms & conditions of the tournament"/>
                </Form.Group>
                <div className='central_heading'>
                    <Button variant="primary" type="Submit" className='btn-primary'>Register</Button>
                </div>
            </Form>
          </div>
        </body>
        )
    }