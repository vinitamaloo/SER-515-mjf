import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import "./assignfields.css";
import MapContainer from "./MapContainer";
import { getAcceptedList, getUnassignedFields, updateRefNameandEmail,updateRefStatus } from '../api/services.js';
import React, { useEffect, useState } from 'react';
import {Table} from 'react-bootstrap';
import { Link ,useHistory} from "react-router-dom";
import axios from "axios";

export default function AssignFields() {
    const [FilteredReferees, setFilteredReferees] = useState([{}]);
    const [field, setField] = useState();
    const [referee, setReferee] = useState();
    const [applicationstatus, setapplication] = useState({"application": "Accept"});
    const [tableData, setTableData] = useState([{}]);
    const [flag, setflag] = useState(true);
    const [fieldlist,setfieldlist] = useState([{}]);
    const [Fieldname, setFieldName] = useState("");
    const [Refereename, setRefereeName] = useState("");
    if(flag) {
        getlist();
        getFieldLists();
    }

    function getReferees(fields){
        var category=fields.split(" ")[1];
        var filreferees=[];
        tableData.forEach((referee) => {
            if(referee.agegroup==category &&  referee.isAssigned=="False")
            {
                filreferees.push(referee);    
            }
            setFilteredReferees(filreferees);
        });
    }

    async function getlist() {
        const x = await getAcceptedList(applicationstatus);
        setTableData(x.data);
       
    }

    async function getFieldLists() {
    const y = await getUnassignedFields();
    setfieldlist(y.data);
    setflag(false);
    }

    async function handleSubmit(event) {    
        var refereeEmail = "";
        alert("Submitted");
        tableData.forEach(element => {
            if(element.firstname == Refereename.split(' ')[0]){
                refereeEmail = element.email;        
            }
        });
    
        let fields = {
            "field": Fieldname.split(" ")[0],
            "refereeName": Refereename,
            "refereeEmail": refereeEmail
        }
        alert("Assigning Fileds");
        let f = await updateRefNameandEmail(fields);
        // setTimeout(() => { }, 5000);
        let r =  await updateRefStatus(fields);
    }

    function AssignFieldsView() {
        return (
            <div className='bg-cont'>
                <div className='main_heading'>Assign Fields to Referee</div>

                <Form onSubmit={handleSubmit} >

                    <Row>
                        <Form.Group className="mb-3" controlId="selectField">
                            <Form.Label>Select Field<label className="text-danger">*</label></Form.Label>
                            <Form.Select aria-label="available" required value={field} onChange={(e) => {
                                setField(e.target.value);
                                getReferees(e.target.value);
                                setFieldName(e.target.value);
                            }}  >
                                <option value="Select an option">Select an option</option>

                                {fieldlist.map((d,index) => (
                                    <option value = {d.field+" "+d.category}>{d.field+" "+d.category}</option>
                                ))}

                            </Form.Select>
                            
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group className="mb-3" controlId="selectReferee">
                            <Form.Label>Select Referee<label className="text-danger">*</label></Form.Label>
                            <Form.Select aria-label="available" required value={referee} onChange={(e) => {
                                setReferee(e.target.value);
                                setRefereeName(e.target.value);
                            }}  >
                                <option value="Select an option">Select an option</option>
                                {FilteredReferees.map((d,index) => (
                                    <option value = {d.firstname +" " + d.lastname}>{d.firstname +" " + d.lastname}</option>
                                ))}
                            </Form.Select>
                            
                        </Form.Group>
                    </Row>
                    <Button variant="primary" type="submit" className='btn-primary'>Submit</Button>
                </Form>
                <br/>
                <br/>                    
                <MapContainer /> 







            </div>
        )
    }
    return AssignFieldsView();
}