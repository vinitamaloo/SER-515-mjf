import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import "./assignfields.css";
import { getAcceptedList, getUnassignedFields } from '../api/services.js';
import React, { useEffect, useState } from 'react';
import {Table} from 'react-bootstrap';
import { Link ,useHistory} from "react-router-dom";
import axios from "axios";
export default function AssignFields() {

    const [field, setField] = useState();
    const [referee, setReferee] = useState();
    const [applicationstatus, setapplication] = useState({"application": "Accept"});
    const [tableData, setTableData] = useState([{}]);
    const [flag, setflag] = useState(true);
    const [fieldlist,setfieldlist] = useState([{}]);
    
    if(flag) {
        getlist();
        getFieldLists();
    }

    async function getlist() {
        const x = await getAcceptedList(applicationstatus);
        setTableData(x.data);
        console.log(tableData);

    }
    async function getFieldLists() {
    const y = await getUnassignedFields();
    setfieldlist(y.data);
    setflag(false);

    }

    function AssignFieldsView() {
        function submit(e){
            // let f = {
            //     "Field": field,
            //     "Refemail" : referee.email
            // }
            // assignedFieldRefree(f);
        }
        return (
            <div className='bg-cont'>
                <div className='main_heading'>Assign Fields to Referee</div>

                <Form>

                    <Row>
                        <Form.Group className="mb-3" controlId="selectField">
                            <Form.Label>Select Field<label className="text-danger">*</label></Form.Label>
                            <Form.Select aria-label="available" required value={field} onChange={(e) => setField(e.target.value)}  >
                                <option value="Select an option">Select an option</option>
                                {fieldlist.map((d,index) => (
                                    <option value = {d.field}>{d.field}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group className="mb-3" controlId="selectReferee">
                            <Form.Label>Select Referee<label className="text-danger">*</label></Form.Label>
                            <Form.Select aria-label="available" required value={referee} onChange={(e) => setReferee(e.target.value)}  >
                                <option value="Select an option">Select an option</option>
                                {tableData.map((d,index) => (
                                    <option value = {d}>{d.firstname +" " + d.lastname}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <button type="button" class="btn btn-primary" onClick = {submit}>Submit</button>
                </Form>
            </div>
        )
    }
    return AssignFieldsView();
}