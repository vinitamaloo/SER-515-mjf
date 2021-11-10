import Button from '@restart/ui/esm/Button';
import { getUsersList } from '../api/services.js';
import React, { useState } from 'react';
import {Table} from 'react-bootstrap';
import { Link ,useHistory} from "react-router-dom";


export default function Login() {

    const [tableData, setTableData] = useState([{}]);
    const [flag, setflag] = useState(true);
    const history = useHistory();

    if(flag) {
        getusers();
    }

    async function getusers() {
        const x = await getUsersList();
        setTableData(x.data);
        setflag(false);
    }

    function handleClick() {
        history.push("/adduserform");
    }
    
    return (
        <div className="users">
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Role</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((d,index) => (
                    <tr key={index}> 
                    <td key={index}>{index}</td>
                    <td key={index}>{d.email}</td>
                    <td key={index}>{d.role}</td>"
                    </tr>
                ))}
            </tbody>
        </Table>
        <Button className="btn-primary" onClick={() => handleClick()}>Add User</Button>
    </div>
  );
}