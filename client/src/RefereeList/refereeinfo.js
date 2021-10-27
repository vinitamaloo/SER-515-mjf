import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import './refereeinfo.css';
import { getRefereeInfo } from '../api/services';

export default function RefereeList() {

    const [referee, setRefereeData] = useState({});
    const [email,setemail] = useState({
        'email' : localStorage.getItem('email')
    });
    const [flag, setflag] = useState(true);

    if(flag) {
        getrefereeinfo();
    }

    async function getrefereeinfo() {
        const x = await getRefereeInfo(email);
        setRefereeData(x.data);
        console.log(referee);
        setflag(false);
    }


    return (
        <body>
        <div style={{marginTop:60}} className="refereeinfo">
        <h6 className='central_heading'>Referee Application Information Page!!</h6>
        <Form>
        <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="Fname">
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                    placeholder={referee.firstname} 
                    readOnly
             />
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId="Lname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    placeholder={referee.lastname} 
                    readOnly />
            </Form.Group>
        </Row>
            <Form.Group className="mb-3" controlId="Email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                    placeholder={referee.email}
                    readOnly />
            </Form.Group>
            <Form.Group className="mb-3" controlId="USSF">
                <Form.Label>USSF Number</Form.Label>
                <Form.Control 
                    placeholder = {referee.ussf}
                    readOnly />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Address">
                <Form.Label>Address</Form.Label>
                <Form.Control 
                    placeholder={referee.address}
                    readOnly  />
            </Form.Group>
            <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="Country">
                <Form.Label>Country</Form.Label>
                <Form.Control 
                    placeholder = {referee.country}
                    readOnly />
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId="State">
                <Form.Label>State</Form.Label>
                <Form.Control 
                    placeholder = {referee.state}
                    readOnly />
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId="City">
                <Form.Label>City</Form.Label>
                <Form.Control
                    placeholder = {referee.city}
                    readOnly />
            </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="Pincode">
                <Form.Label>Pincode</Form.Label>
                <Form.Control 
                    placeholder = {referee.zipcode} 
                    readOnly />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control 
                    placeholder= {referee.phone}  
                    readOnly />
            </Form.Group>
            <br></br>
            <div style={{fontSize:"25px"}}>Experience & Availability</div>
            <br></br>
            <Form.Label>Referee Grade<label className="text-danger">*</label></Form.Label>
                <Form.Control 
                    placeholder= {referee.grade}  
                    readOnly />
            <br></br>
            <Form.Group className="mb-3" controlId="Experience">
                <Form.Label>Number of years of experience</Form.Label>
                <Form.Control 
                    placeholder= {referee.experience}  
                    readOnly />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Age">
                <Form.Label>Age</Form.Label>
                <Form.Control 
                    placeholder= {referee.age}  
                    readOnly />
            </Form.Group>
            <Row className="mb-3">
            <Form.Label>Availability</Form.Label>
            <Form.Group as={Col} className="mb-3" controlId="Availability">
                <Form.Control 
                    placeholder= {referee.availability}  
                    readOnly />
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId="Availability">
                <Form.Control 
                    placeholder= {referee.time}  
                    readOnly />
            </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="Profile">
                <Form.Label>Profile</Form.Label>
                <Form.Control 
                    placeholder= {referee.profile}  
                    readOnly />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Gender">
                <Form.Label>Gender</Form.Label>
                <Form.Control 
                    placeholder= {referee.gender}  
                    readOnly />
            </Form.Group>
            <Form.Group className="mb-3" controlId="AgeGroup">
                <Form.Label>Age Group</Form.Label>
                <Form.Control 
                    placeholder= {referee.agegroup}  
                    readOnly />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Status">
                <Form.Check
                    required
                    label="Accept"
                    type = "checkbox"/>
                <Form.Check
                    required
                    label="Decline"
                    type = "checkbox"/>
            </Form.Group>
            <div className='central_heading'>
            <Button variant="primary" type="submit" className='btn-primary'>Submit</Button>
            </div>
            </Form>
            </div>
            </body>
        );

}