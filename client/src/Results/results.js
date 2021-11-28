import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { Row, Col, Card, Container} from "react-bootstrap";
import "./results.css";
import MatchCard from "./match-card";
import { getResults } from '../api/services.js';
import DatePicker from 'react-date-picker';

export default function Tournament() {
    const [resultsData, setResultsData] = useState([{a:'ge'}]);
    const [value, setValue] = useState(new Date());
    const [flagGetData, setFlagGetData] = useState(true);
    const location = useLocation()
    const category = location.state?.title

    function handleDateChange(date) {
        console.log('date changes')
        setValue(date);
        getResultsFromServer(date, category);
    }

    if(flagGetData) {
        getResultsFromServer(null, category);
        setFlagGetData(false)
    }

     async function getResultsFromServer(date, category) {
        const resultsPojo = {
            "date": date,
            "category": category
        }

        let x = await getResults(resultsPojo)
        setResultsData(x.data)
        console.log(resultsData)
     }

    return(
        <div style={{ marginTop: 60 }}>
            <Container>
                <div className="center">
                    <DatePicker
                        textColor="#ffffff"
                        onChange={value => handleDateChange(value)}
                        value={value} />
                </div>

                {resultsData.map((d) => (
                    <Row>
                        <Col>
                            <MatchCard date={d.matchDate} team1={d.teamA} team2={d.teamB}
                                        goals1={d.teamAGoals} goals2={d.teamBGoals} time={d.gameTime} />
                        </Col>
                    </Row>
                ))}
            </Container>
        </div>
    )
}
