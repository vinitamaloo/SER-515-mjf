import Button from '@restart/ui/esm/Button';
import { getUsersList } from '../api/services.js';
import React, { useState } from 'react';
import {Table} from 'react-bootstrap';
import { Link ,useHistory} from "react-router-dom";
import { removeAdmin } from '../api/services.js';
import "./AddUsers.css";


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

    async function removeUser(email) {
        const e = {"email" : email};
        await removeAdmin(e);
        window.location.reload(false);
    }
    
    return (
        <div className="users">
        <table id="users">
            <thead>
                <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Role</th>
                <th>Remove User</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((d,index) => (
                    <tr key={index}> 
                    <td key={index}>{index}</td>
                    <td key={index}>{d.email}</td>
                    <td key={index}>{d.role}</td>
                    <td key={index}><Button className="btn-primary" onClick={() => removeUser(d.email)}>Remove</Button></td>
                    </tr>
                ))}
            </tbody>
            <Button className="btn-primary" onClick={() => handleClick()}>Add User</Button>
        </table>
    </div>
  );
}