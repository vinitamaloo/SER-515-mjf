import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { postReferee } from '../api/services';
import "./register.css";


export default function Login() {

    const [Firstname, setFirstName] = useState("");
    const [Lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [USSF, setUSSF] = useState("");
    const [Address, setAddress] = useState("");
    const [Country, setCountry] = useState("");
    const [State, setState] = useState("");
    const [City, setCity] = useState("");
    const [Pincode, setPincode] = useState("");
    const [Phone, setPhone] = useState("");
    const [Grade, setGrade] = useState("");
    const [Experience, setExperience] = useState("");
    const [Age, setAge] = useState(0);
    const [Availability, setAvailability] = useState("");
    const [Time, setTime] = useState("");
    const [Profile, setProfile] = useState("");
    const [AgeGroup, setAgeGroup] = useState("");
    const [Phoneerror, setPhoneError] = useState("");
    const [Ageerror, setAgeError] = useState("");
    const [isValid, setValid] = useState(false);

    async function handleSubmit(event) {

        if(validate()) {
            alert('Registration Form is submited');
            let referee = {
                "firstname": Firstname,
                "lastname" : Lastname,
                "email" : email,
                "ussf" : USSF,
                "address" : Address,
                "country" : Country,
                "city" : City,
                "state" : State,
                "zipcode" : Pincode,
                "phone" : Phone,
                "grade" : Grade,
                "experience" : Experience,
                "age" : Age,
                "availability" : Availability,
                "time" : Time,
                "profile" :Profile,
                "agegroup" : AgeGroup
            }
            let x=await postReferee(referee);
            console.log(x);
        }
        else {
            alert('Form  is not submited');
            event.preventDefault();
        }
    }

    function validate() {

        var pattern = new RegExp(/^[0-9\b]+$/);
        setPhoneError("");
        setAgeError(0);

        if(Phone.length < 10 || !pattern.test(Phone)) {
            setPhoneError("Please enter a valid Phone Number!!");
            setValid(false);
            return isValid;
        }

        if(Age < 12) {
            setAgeError("Age needs to be greater than 12 to register!!");
            setValid(false);
            return isValid;
        }

        return true;
    }

    return (
        <body>
        <div style={{marginTop:60}} className="registerreferee">
        <h6 className='central_heading'>Application form for Referee!!</h6>
        <Form onSubmit={handleSubmit} >
        <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="Fname">
                <Form.Label>First Name<label className="text-danger">*</label></Form.Label>
                <Form.Control 
                    required
                    type="name" 
                    placeholder="Enter Your first name"  
                    value={Firstname}
                    onChange={(e) => setFirstName(e.target.value)}/>
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId="Lname">
                <Form.Label>Last Name<label className="text-danger">*</label></Form.Label>
                <Form.Control
                    required
                    type="name" 
                    placeholder="Enter Your Last name"  
                    value={Lastname}
                    onChange={(e) => setLastName(e.target.value)}/>
            </Form.Group>
        </Row>
            <Form.Group className="mb-3" controlId="Email">
                <Form.Label>Email Address<label className="text-danger">*</label></Form.Label>
                <Form.Control 
                    required
                    type="email" 
                    placeholder="Enter Your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                <Form.Text className="text-muted">Please make sure that the email is correct.This is the email address at which you will receive official communications.</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="USSF">
                <Form.Label>USSF Number</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter Your USSF Number"  
                    value={USSF}
                    onChange={(e) => setUSSF(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Address">
                <Form.Label>Address<label className="text-danger">*</label></Form.Label>
                <Form.Control 
                    required
                    type="text" 
                    placeholder="Enter Your address"  
                    value={Address}
                    onChange={(e) => setAddress(e.target.value)}/>
            </Form.Group>
            <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="Country">
                <Form.Label>Country<label className="text-danger">*</label></Form.Label>
                <Form.Control 
                    required
                    type="text" 
                    value={Country}
                    onChange={(e) => setCountry(e.target.value)}/>
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId="State">
                <Form.Label>State<label className="text-danger">*</label></Form.Label>
                <Form.Control 
                    required
                    type="text" 
                    value={State}
                    onChange={(e) => setState(e.target.value)}/>
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId="City">
                <Form.Label>City<label className="text-danger">*</label></Form.Label>
                <Form.Control
                    required 
                    type="text" 
                    value={City}
                    onChange={(e) => setCity(e.target.value)}/>
            </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="Pincode">
                <Form.Label>Pincode<label className="text-danger">*</label></Form.Label>
                <Form.Control 
                    required
                    type="text" 
                    value={Pincode}
                    onChange={(e) => setPincode(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Phone">
                <Form.Label>Phone<label className="text-danger">*</label></Form.Label>
                <Form.Control 
                    required
                    type="text" 
                    placeholder="Enter Your Phone"  
                    value={Phone}
                    onChange={(e) => setPhone(e.target.value)}/>
                <div className="text-danger">{Phoneerror}</div>
            </Form.Group>
            <br></br>
            <div style={{fontSize:"25px"}}>Experience & Availability</div>
            <br></br>
            <Form.Label>Referee Grade<label className="text-danger">*</label></Form.Label>
            <Form.Select aria-label="grade" required value={Grade} onChange={(e) => setGrade(e.target.value)}  >
                <option value="Select an option">Select an option</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
            </Form.Select>
            <br></br>
            <Form.Group className="mb-3" controlId="Experience">
                <Form.Label>Number of years of experience</Form.Label>
                <Form.Select aria-label="exp" value={Experience} onChange={(e) => setExperience(e.target.value)}  >
                <option value="Select an option">Select an option</option>
                <option value="No experience">No experience</option>
                <option value="less than 5 years">less than 5 years</option>
                <option value="5 to 10 years">5 to 10 years</option>
                <option value="more than 10 years">more than 10 years</option>
            </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Age">
                <Form.Label>Age<label className="text-danger">*</label></Form.Label>
                <Form.Control 
                    required
                    type="number" 
                    value={Age}
                    onChange={(e) => setAge(e.target.value)}/>
                <div className="text-danger">{Ageerror}</div>
            </Form.Group>
            <Row className="mb-3">
            <Form.Label>Availability<label className="text-danger">*</label></Form.Label>
            <Form.Group as={Col} className="mb-3" controlId="Availability">
                <Form.Select aria-label="available" required value={Availability} onChange={(e) => setAvailability(e.target.value)}  >
                    <option value="Select an option">Select an option</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                </Form.Select>
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId="Availability">
                <Form.Select aria-label="time" required value={Time} onChange={(e) => setTime(e.target.value)}  >
                    <option value="Select an option">Select an option</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Night">Night</option>
                </Form.Select>
            </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="Profile">
                <Form.Label>Profile</Form.Label>
                <Form.Control 
                    as="textarea"
                    placeholder = "Tell us more about your yourself."
                    value={Profile}
                    onChange={(e) => setProfile(e.target.value)}/>
                <Form.Text className="text-muted">Include your past experience about how many games you have officiated and when, any trainings that you might have done, your comfort level with certain ages, etc. The more we know about you, the more accurately we can assign you to games.</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="AgeGroup">
                <Form.Label>Age Group<label className="text-danger">*</label></Form.Label>
                <Form.Select aria-label="available" required value={AgeGroup} onChange={(e) => setAgeGroup(e.target.value)}  >
                <option value="Select an option">Select an option</option>
                <option value="boysU08">boysU08</option>
                <option value="boysU09">boysU09</option>
                <option value="boysU10">boysU10</option>
                <option value="boysU11">boysU11</option>
                <option value="boysU12">boysU12</option>
                <option value="boysU13">boysU13</option>
                <option value="boysU14">boysU14</option>
                <option value="boysU15">boysU15</option>
                <option value="boysU16">boysU16</option>
                <option value="boysU17">boysU17</option>
                <option value="boysU18">boysU18</option>
                <option value="boysU19">boysU19</option>
                <option value="girlsU08">girlsU08</option>
                <option value="girlsU09">girlsU09</option>
                <option value="girlsU10">girlsU10</option>
                <option value="girlsU11">girlsU11</option>
                <option value="girlsU12">girlsU12</option>
                <option value="girlsU13">girlsU13</option>
                <option value="girlsU14">girlsU14</option>
                <option value="girlsU15">girlsU15</option>
                <option value="girlsU16">girlsU16</option>
                <option value="girlsU17">girlsU17</option>
                <option value="girlsU18">girlsU18</option>
                <option value="girlsU19">girlsU19</option>
            </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Terms and Condition">
                <Form.Check
                    required
                    label="Agree to terms and conditions"
                    type = "checkbox"/>
            </Form.Group>
            <div className='central_heading'>
            <Button variant="primary" type="submit" className='btn-primary'>Submit application</Button>
            </div>
            </Form>
            </div>
            </body>
        );
}

