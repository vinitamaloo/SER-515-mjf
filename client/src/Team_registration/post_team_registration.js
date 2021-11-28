import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./post_team_registration.css";
import { getTeamDateById, changeTeamStatus} from '../api/services';

export default function PostTeamRegistration() {
    const [teamName, setTeamName] = useState('Calm Dolphin');
    const [teamStatus, setTeamStatus] = useState('Not Registered');
    const [email, setEmail] = useState('calmdopphins@gmail.com');
    const [phone, setPhone] = useState('+1-480-760-8898');
    const [fullName, setFullName] = useState('Calmin D. Hars');
    const [teamData, setTeamDataa] = useState();
    const [flag, setFlag] = useState();
    const [teamId, setTeamId] = useState(localStorage.getItem('teamId'))
//
//    if (flag) {
//        console.log(flag)
//        get_team_data()
//    }

//    async function get_team_data() {
//        const team_data = await getTeamDateById(teamId)
//        setFlag(0)
//        setTeamDataa(team_data.data)
//    }

    async function handlePayment() {
        let applicationStatus = {
            "teamId" : teamId,
            "applicationStatus": 'REGISTERED'
        }
        setTeamStatus('REGISTERED')
        const resp = await changeTeamStatus(applicationStatus);
    }

    function postTeamSuccessfulPaymentView() {
        return (
           <div className='fragment'>
             <div className='central_heading'>Congratulations!</div>
             <div className='central_heading'>Your team is now Registered!!</div>
             <div className='central_heading'>
                <Button variant="primary" className='btn-primary'>
                    <Link to={'/'} style={{color: "white",textDecoration: 'none'}}>Go to home</Link>
                </Button>
             </div>
           </div>
        )
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

    if (teamStatus === 'Not Registered')
        return postTeamSuccessfulRegistrationView();
    else
        return postTeamSuccessfulPaymentView();
}
