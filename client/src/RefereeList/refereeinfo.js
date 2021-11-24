import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import './refereeinfo.css';
import { getRefereeInfo } from '../api/services';
import { Link ,useHistory} from "react-router-dom";
import { setApplicationStatus } from '../api/services';


export default function RefereeList() {

    const [referee, setRefereeData] = useState({});
    const [email,setemail] = useState({
        'email' : localStorage.getItem('email')
    });
    const [flag, setflag] = useState(true);
    const [status , setStatus] = useState("");
    const [acceptstatus, setaccept] = useState(true);
    const [declinestatus, setdecline] = useState(true);
    const history = useHistory();

    if(flag) {
        getrefereeinfo();
    }

    async function getrefereeinfo() {
        const x = await getRefereeInfo(email);
        setRefereeData(x.data);
        setflag(false);
    }

    function handleInputChange(event) {
        const target = event.target;
        var value = target.value;
        
        if(target.checked) {
            if(value === "Accept") {
                setdecline(false);
                setStatus("Accept");
            }
            else {
                setaccept(false);
                setStatus("Decline");
            }
        }
        else {
            setStatus("");
            if(value === "Accept") {
                setdecline(true);
            }
            else {
                setaccept(true);
            }
        }
        
    }

    async function update() {

        const refstatus = {
            "application" : status,
            "email" : email.email
        };
        
        let x = await setApplicationStatus(refstatus);
    }


    function handleClick(event) {

        if(status.length === 0) {
            alert('Please accept or reject the application before submitting!!');
            event.preventDefault();
        }
        else {
            if( status === "Accept")
                alert( "Application is "+ status + "ed");
            else
                alert( "Application is "+ status + "d")

            update();

            history.push("/refereelist");
        }
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
            <Form.Group className="mb-3" controlId="AgeGroup">
                <Form.Label>Age Group</Form.Label>
                <Form.Control 
                    placeholder= {referee.agegroup}  
                    readOnly />
            </Form.Group>
            <div className="radio">
                <label> 
                    <input
                    value = "Accept"
                    disabled = {!acceptstatus}
                    type = "checkbox"
                    onChange={handleInputChange} />
                    Accept Application
                </label>
            </div>
            <div className="radio">
                <label> 
                    <input
                    label="Decline"
                    value = "Decline"
                    disabled = {!declinestatus}
                    type = "checkbox"
                    onChange={handleInputChange} />
                    Decline Application
                </label>
            </div>
            <div className='central_heading'>
            <Button variant="primary" type="submit" className='btn-primary' onClick={() => handleClick()}>Submit</Button>
            </div>
            </Form>
            </div>
            </body>
        );

}