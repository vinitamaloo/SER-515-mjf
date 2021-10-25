import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { TextInput, required } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import "./set_scores.css";

export default function SetScores() {

    const [score, setScore] = useState("");
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
                                    <Form.Group as={Col} className="mb-3" controlId="Fname">
                                        <Form.Label>Set Score: <label className="text-danger">*</label></Form.Label>
                                        <Form.Control
                                            required
                                            autoFocus
                                            type="name"
                                            placeholder="Enter Your first name"
                                            value={score}
                                            onChange={(e) => setScore(e.target.value)}/>
                            </Form.Group>
                            </Row>
            </Form>
        </div>
    )
    }
    return SetScoresView();
}