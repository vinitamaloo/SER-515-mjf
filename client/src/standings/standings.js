import Button from '@restart/ui/esm/Button';
import { getStandings } from '../api/services.js';
import React, { useState } from 'react';
import {Table} from 'react-bootstrap';
import { Link ,useHistory} from "react-router-dom";
import "./standings.css";
import { useLocation } from "react-router-dom";


export const standings = {};

export default function Standings() {
    const location = useLocation()
    const title = location.state?.title;
    const [tableData, setTableData] = useState([{}]);
    const [category, setCategory] = useState({"category": title});
    const [flag, setFlag] = useState(true);

    if(flag) {
        localStorage.setItem('category',category);
        getList();
    }

    async function getList() {
        const x = await getStandings(category);
        setTableData(x.data);
        setFlag(false);
    }

    return (
        <div className="users">
        <h2 className="title">Standings for {title}</h2>
            <Table id="customers">
                <thead>
                    <tr>
                    <th>Standing</th>
                    <th>Team</th>
                    <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((d,index) => (
                        <tr key={index}>
                        <td key={index}>{index+1}</td>
                        <td key={index}>{d.teamName}</td>
                        <td key={index}>{d.points}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
