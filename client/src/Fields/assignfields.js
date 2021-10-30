

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import "./assignfields.css";
import { getAcceptedList } from '../api/services.js';
import React, { useState } from 'react';
import {Table} from 'react-bootstrap';
import { Link ,useHistory} from "react-router-dom";



export default function AssignFields() {

    const [field, setField] = useState("");
    const [referee, setReferee] = useState("");
    const [applicationstatus, setapplication] = useState({"application": "Accept"});
    const [tableData, setTableData] = useState([{}]);
    const [flag, setflag] = useState(true);
    if(flag) {
        getlist();
    }

    async function getlist() {
        const x = await getAcceptedList(applicationstatus);
        setTableData(x.data);
        setflag(false);
    }
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
                                {tableData.map((d,index) => (
                                    <option value = {d.firstname}>{d.firstname}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <button type="button" class="btn btn-primary">Submit</button>
                </Form>
            </div>
        )
    }
    return AssignFieldsView();
}