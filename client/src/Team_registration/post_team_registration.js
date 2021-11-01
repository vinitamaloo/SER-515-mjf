import React, { useState } from 'react'
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./post_team_registration.css";
import { getTeamDateById, changeTeamStatus} from '../api/services';

export default function PostTeamRegistration() {
    const [teamName, setTeamName] = useState("TEAM 1");
    const [teamStatus, setTeamStatus] = useState("APPLIED");
    const [email, setEmail] = useState("email@example.com");
    const [phone, setPhone] = useState("234-232-2323");
    const [fullName, setFullName] = useState("Mark M. Hennings");
    const [teamId, setTeamId] = useState(localStorage.getItem('teamId'));


    async function get_team_data() {
        const team_data = await getTeamDateById(teamId);
        //  if (teamStatus === 'REGISTERED')
        //      TODO: redirect to team home page
    }

    async function handlePayment() {
        let applicationStatus = {
            "teamId" : teamId,
            "applicationStatus": 'REGISTERED'
        }
        const resp = await changeTeamStatus(applicationStatus);
        //if (resp == 200)
            //      TODO: redirect to team home page
    }

    function postTeamSuccessfulRegistrationView() {
        return (
           <div className='fragment'>
             <div className='central_heading'>Thanks for Applying to the tournament!</div>
             <Table striped bordered hover className='fragment'>
               <thead>
                 <tr>
                   <th>Attributes</th>
                   <th>Values</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td>Team Name</td>
                   <td>{teamName}</td>
                 </tr>
                 <tr>
                   <td>Team Id</td>
                   <td>{teamId}</td>
                 </tr>
                 <tr>
                   <td>Primary contact name</td>
                   <td>{fullName}</td>
                 </tr>
                 <tr>
                   <td>Primary contact phone</td>
                   <td>{phone}</td>
                 </tr>
                 <tr>
                   <td>Primary contact email</td>
                   <td>{email}</td>
                 </tr>
                 <tr>
                   <td>Team Status</td>
                   <td><Button variant="primary" type="Submit" onClick={handlePayment} className='btn-primary'>Pay Now</Button></td>
                 </tr>
               </tbody>
             </Table>
           </div>
        )
    }

    return postTeamSuccessfulRegistrationView();
}