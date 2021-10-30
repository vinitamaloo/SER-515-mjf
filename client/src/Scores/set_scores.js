import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { TextInput, required } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import "./set_scores.css";

export default function SetScores() {

    const [scoreA, setScoreA] = useState("");
    const [scoreB, setScoreB] = useState("");
    const [match, selectMatch] = useState("");

    function SetScoresView(){
    return (
        <div className='fragment'>
            <div className='central_heading'>Set Scores</div>

            <Form>

            <Row>
                <Form.Group className="mb-3" controlId="SelectGame">
                                <Form.Label>Select Game<label className="text-danger">*</label></Form.Label>
                                <Form.Select aria-label="available" required value={match} onChange={(e) => selectMatch(e.target.value)}  >
                                <option value="Select an option">Select an option</option>
                                <option value="Game1">ASU vs UoA</option>
                                <option value="Game2">ASU vs MIT</option>

                            </Form.Select>
                            </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3" controlId="teamAScore">
                        <Form.Label>Team A Score: <label className="text-danger">*</label></Form.Label>
                        <Form.Control
                            required
                            autoFocus
                            type="name"
                            placeholder="Score"
                            value={scoreA}
                            onChange={(e) => setScoreA(e.target.value)}/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3" controlId="score">
                        <Form.Label>Team B Score: <label className="text-danger">*</label></Form.Label>
                        <Form.Control
                            required
                            autoFocus
                            type="name"
                            placeholder="Score"
                            value={scoreB}
                            onChange={
                            (e) => setScoreB(e.target.value)


//                             if value is not blank, then test the regex

//                            if (e.target.value === '' || re.test(e.target.value)) {
//                               this.setState({value: e.target.value})
//                            }
                            }/>
                    </Form.Group>
                </Row>
                <p>Final Score is: {scoreA + "-" + scoreB}</p>
                <button type="button" class="btn btn-primary">Submit</button>
            </Form>
        </div>
    )
    }
    return SetScoresView();
}