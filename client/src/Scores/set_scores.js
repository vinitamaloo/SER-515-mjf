import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import { postSetScores } from '../api/services';
import "./set_scores.css";


export default function Login() {

    const [match, setMatch] = useState("");
    const [scoreA, setScoreA] = useState("");
    const [scoreB, setScoreB] = useState("");
    const [scoreAError, setScoreAError] = useState("");
    const [scoreBError, setScoreBError] = useState("");
    const [isValid, setValid] = useState(false);


    async function handleSubmit(event) {

        if(validate()) {

            alert('Form is submited');
            let referee = {
                "match": match,
                "scoreA" : scoreA,
                "scoreB" : scoreB,

            }
            let x=await postSetScores(referee);
            console.log(x);
        }
        else {
            alert('Form  is not submited');
            event.preventDefault();
        }
    }

    function validate() {

        var pattern = new RegExp(/^[0-9\b]+$/);

        if(!pattern.test(scoreA)) {
            setScoreAError("Please enter a valid Phone Number!!");
            setValid(false);
            return isValid;
        }
        if(!pattern.test(scoreB)) {
            setScoreBError("Please enter a valid Phone Number!!");
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
            <Form.Group className="mb-3" controlId="Gender">
                            <Form.Label>Match<label className="text-danger">*</label></Form.Label>
                            <Form.Select aria-label="available" onChange={(e) => setMatch(e.target.value)}  >
                            <option value="Select an option">Select an option</option>
                            <option value={match}>ASU vs MIT</option>
                            <option value={match}>ASU vs CMU</option>
                        </Form.Select>
                        </Form.Group>
        </Row>
        <Row>
            <Form.Group as={Col} className="mb-3" controlId="Fname">
                <Form.Label>Team A Score<label className="text-danger">*</label></Form.Label>
                <Form.Control
                    required
                    autoFocus
                    type="name"
                    placeholder="Score"
                    value={scoreA}
                    onChange={(e) => setScoreA(e.target.value)}/>
            </Form.Group>
        </Row>
        <Row>
            <Form.Group as={Col} className="mb-3" controlId="Lname">
                <Form.Label>Last Name<label className="text-danger">*</label></Form.Label>
                <Form.Control
                    required
                    autoFocus
                    type="name"
                    placeholder="Score"
                    value={scoreB}
                    onChange={(e) => setScoreB(e.target.value)}/>
            </Form.Group>
        </Row>
            <div className='central_heading'>
            <Button variant="primary" type="submit" className='btn-primary'>Submit application</Button>
            </div>
            </Form>
            </div>
            </body>
        );
}

