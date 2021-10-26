import Button from '@restart/ui/esm/Button';
import { getRefereeList } from '../api/services.js'
import React, { useState } from 'react'
import {Table} from 'react-bootstrap'


export default function RefereeList() {

    const [application, setapplication] = useState({"application": "In Progress"});
    const [tableData, setTableData] = useState([{}]);
    const [flag, setflag] = useState(true);

    if(flag) {
        getlist();
    }

    async function getlist() {
        const x = await getRefereeList(application);
        setTableData(x.data);
        console.log(typeof(x));
        setflag(false);
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
                        <td key={index}><Button className="btn-primary">View</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
        
    );


}