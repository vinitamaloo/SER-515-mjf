import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


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
    const [Age, setAge] = useState("");
    const [Availability, setAvailability] = useState("");
    const [Time, setTime] = useState("");
    const [Profile, setProfile] = useState("");
    const [Gender, setGender] = useState("");
    const [AgeGroup, setAgeGroup] = useState("");
    const [Phoneerror, setPhoneError] = useState("");
    const [Ageerror, setAgeError] = useState("");
    const [isValid, setValid] = useState(false);

    function handleSubmit(event) {

        if(validate()) {
            alert('Registration Form is submited');
        }
        else {
            alert('Form  is not submited');
            event.preventDefault();
        }
    }

    function validate() {

        var pattern = new RegExp(/^[0-9\b]+$/);
        setPhoneError("");
        setAgeError("");

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
        <div className="registerall">
        <Form onSubmit={handleSubmit} >
            {/* <h1> Get started with today! Create your account by filling the information below</h1> */}
            <Form.Group className="mb-3" controlId="Fname">
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                    required
                    autoFocus 
                    type="name" 
                    placeholder="Enter Your first name"  
                    value={Firstname}
                    onChange={(e) => setFirstName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Lname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    required
                    autoFocus 
                    type="name" 
                    placeholder="Enter Your Last name"  
                    value={Lastname}
                    onChange={(e) => setLastName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                    required
                    type="email" 
                    placeholder="Enter Your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="USSF">
                <Form.Label>USSF Number</Form.Label>
                <Form.Control 
                    required
                    autoFocus 
                    type="text" 
                    placeholder="Enter Your USSF Number"  
                    value={USSF}
                    onChange={(e) => setUSSF(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Address">
                <Form.Label>Address</Form.Label>
                <Form.Control 
                    required
                    autoFocus 
                    type="text" 
                    placeholder="Enter Your address"  
                    value={Address}
                    onChange={(e) => setAddress(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Country">
                <Form.Label>Country</Form.Label>
                <Form.Control 
                    required
                    autoFocus 
                    type="text" 
                    value={Country}
                    onChange={(e) => setCountry(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="State">
                <Form.Label>State</Form.Label>
                <Form.Control 
                    required
                    autoFocus 
                    type="text" 
                    value={State}
                    onChange={(e) => setState(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="City">
                <Form.Label>City</Form.Label>
                <Form.Control
                    required 
                    autoFocus 
                    type="text" 
                    value={City}
                    onChange={(e) => setCity(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Pincode">
                <Form.Label>Pincode</Form.Label>
                <Form.Control 
                    required
                    autoFocus 
                    type="text" 
                    value={Pincode}
                    onChange={(e) => setPincode(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control 
                    required
                    autoFocus 
                    type="text" 
                    placeholder="Enter Your Phone"  
                    value={Phone}
                    onChange={(e) => setPhone(e.target.value)}/>
                <div className="text-danger">{Phoneerror}</div>
            </Form.Group>
            <div>Experience & Availability</div>
            <Form.Label>Referee Grade</Form.Label>
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
            <Form.Group className="mb-3" controlId="Experience">
                <Form.Label>Number of years of experience</Form.Label>
                <Form.Select aria-label="exp" required value={Experience} onChange={(e) => setExperience(e.target.value)}  >
                <option value="Select an option">Select an option</option>
                <option value="0">No experience</option>
                <option value="1">less than 5 years</option>
                <option value="2">5 to 10 years</option>
                <option value="3">more than 10 years</option>
            </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Age">
                <Form.Label>Age</Form.Label>
                <Form.Control 
                    required
                    autoFocus 
                    type="number" 
                    value={Age}
                    onChange={(e) => setAge(e.target.value)}/>
                <div className="text-danger">{Ageerror}</div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Availability">
                <Form.Label>Availability</Form.Label>
                <Form.Select aria-label="available" required value={Availability} onChange={(e) => setAvailability(e.target.value)}  >
                <option value="Select an option">Select an option</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
            </Form.Select>
            <Form.Select aria-label="time" required value={Time} onChange={(e) => setTime(e.target.value)}  >
                <option value="Select an option">Select an option</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Night">Night</option>
            </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Profile">
                <Form.Label>Profile</Form.Label>
                <Form.Control 
                    autoFocus 
                    type="textbox" 
                    value={Profile}
                    onChange={(e) => setProfile(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Gender">
                <Form.Label>Gender</Form.Label>
                <Form.Select aria-label="available" required value={Gender} onChange={(e) => setGender(e.target.value)}  >
                <option value="Select an option">Select an option</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
            </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="AgeGroup">
                <Form.Label>Age Group</Form.Label>
                <Form.Select aria-label="available" required value={AgeGroup} onChange={(e) => setAgeGroup(e.target.value)}  >
                <option value="Select an option">Select an option</option>
                <option value="U08">U08</option>
                <option value="U09">U09</option>
                <option value="U10">U10</option>
                <option value="U11">U11</option>
                <option value="U12">U12</option>
                <option value="U13">U13</option>
                <option value="U14">U14</option>
                <option value="U15">U15</option>
                <option value="U16">U16</option>
                <option value="U17">U17</option>
                <option value="U18">U18</option>
                <option value="U19">U19</option>
            </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">Submit application</Button>
            </Form>
            </div>
        );
}
