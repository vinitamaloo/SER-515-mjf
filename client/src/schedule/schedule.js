import React from "react";
import { useLocation } from "react-router-dom";
import {Table} from 'react-bootstrap';
import "./schedule.css";
export default function Schedule() {
    const location = useLocation()
    const matches = location.state?.matches;
    const title = location.state?.title;
    console.log(matches);
    return(
        <div>
            <h2 className="title" style={{justifyContent:"center", marginTop:0}}>Schedule for {title}</h2>
        <table id="customers">
        <thead >
            <tr>
            <th>Team 1</th>
            <th>Team 2</th>
            <th>Venue</th>
            <th>Date</th>
            </tr>
        </thead>
        <tbody>
            {matches.map((d,index) => (
                <tr key={index}> 
                
                <td key={index}>{d.team1.teamName}</td>
                <td key={index}>{d.team2.teamName}</td>
                <td key={index}>{d.venue.venueName}</td>
                <td key={index}>{d.matchDate.substring(0, 10)}</td>
                </tr>
            ))}
        </tbody>
        </table>
</div>
    )
}