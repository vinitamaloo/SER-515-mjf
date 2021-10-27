import Button from '@restart/ui/esm/Button';
import { getRefereeList } from '../api/services.js';
import React, { useState } from 'react';
import {Table} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

export const referee = {};

export default function RefereeList() {

    const [applicationstatus, setapplication] = useState({"application": "In Progress"});
    const [tableData, setTableData] = useState([{}]);
    const [flag, setflag] = useState(true);

    if(flag) {
        getlist();
    }

    async function getlist() {
        const x = await getRefereeList(applicationstatus);
        setTableData(x.data);
        setflag(false);
    }

    function handleClick(firstname,lastname,email,ussf,address,country,city,state,zipcode,phone,grade,experience,age,availability,time,profile,gender,agegroup,application) {
        referee.firstname = firstname
        referee.lastname = lastname
        referee.email = email
        referee.ussf = ussf
        referee.address = address
        referee.country = country
        referee.city = city
        referee.state = state
        referee.zipcode = zipcode
        referee.phone = phone
        referee.grade = grade
        referee.experience = experience
        referee.age = age
        referee.availability = availability
        referee.time = time
        referee.profile = profile
        referee.gender = gender
        referee.agegroup = agegroup
        referee.application = application
    
        window.location.href="http://localhost:3000/refereeinfo"
    }
    
    return (
        <div className="users">
            <Table striped bordered hover size="sm">
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
                        <td key={index}><Button onClick={() => handleClick(d.firstname,d.lastname,d.email,d.ussf,d.address,d.country,d.city,d.state,d.zipcode,d.phone,d.grade,d.experience,d.age,d.availability,d.time,d.profile,d.gender,d.agegroup,d.application)} className="btn-primary">View</Button></td>"
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
        
    );


}