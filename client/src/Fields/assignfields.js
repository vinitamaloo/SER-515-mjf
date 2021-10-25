

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import "./assignfields.css";

export default function AssignFields() {

    const [field, setField] = useState("");
    const [referee, setReferee] = useState("");

    function AssignFieldsView() {
        return (
            <div className='bg-cont'>
                <div className='main_heading'>Assign Fields to Referee</div>

                <Form>

                    <Row>
                        <Form.Group className="mb-3" controlId="selectField">
                            <Form.Label>Select Field<label className="text-danger">*</label></Form.Label>
                            <Form.Select aria-label="available" required value={field} onChange={(e) => setField(e.target.value)}  >
                                <option value="Select an option">Select an option</option>
                                <option value="option 1">Field1</option>
                                <option value="option 2">Field2</option>
                                <option value="option 3">Field3</option>
                                <option value="option 4">Field4</option>
                                <option value="option 5">Field5</option>
                                <option value="option 6">Field6</option>

                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group className="mb-3" controlId="selectReferee">
                            <Form.Label>Select Referee<label className="text-danger">*</label></Form.Label>
                            <Form.Select aria-label="available" required value={referee} onChange={(e) => setReferee(e.target.value)}  >
                                <option value="Select an option">Select an option</option>
                                <option value="option 1">Referee1</option>
                                <option value="option 2">Referee2</option>
                                <option value="option 1">Referee3</option>
                                <option value="option 2">Referee4</option>
                                <option value="option 1">Referee5</option>
                                <option value="option 2">Referee6</option>

                            </Form.Select>
                        </Form.Group>
                    </Row>
                </Form>
            </div>
        )
    }
    return AssignFieldsView();
}