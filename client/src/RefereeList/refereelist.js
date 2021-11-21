import Button from '@restart/ui/esm/Button';
import { getRefereeList } from '../api/services.js';
import React, { useState } from 'react';
import {Table} from 'react-bootstrap';
import { Link ,useHistory} from "react-router-dom";
import "./refereelist.css";


export const referee = {};

export default function RefereeList() {

    const [applicationstatus, setapplication] = useState({"application": "In Progress"});
    const [tableData, setTableData] = useState([{}]);
    const [flag, setflag] = useState(true);
    const history = useHistory();

    if(flag) {
        getlist();
    }

    async function getlist() {
        const x = await getRefereeList(applicationstatus);
        setTableData(x.data);
        setflag(false);
    }

    function handleClick(email) {

        localStorage.setItem('email',email);
        history.push("/refereeinfo");
    }
    
    return (
        <div>
            <table id="referee">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Application Status</th>
                    <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((d,index) => (
                        <tr key={index}> 
                        <td key={index}>{index}</td>
                        <td key={index}>{d.firstname}</td>
                        <td key={index}>{d.lastname}</td>
                        <td key={index}>{d.email}</td>
                        <td key={index}>{d.phone}</td>
                        <td key={index}>{d.application}</td>
                        <td key={index}><Button onClick={() => handleClick(d.email)} className="btn-primary">View</Button></td>"
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
    );


}