
import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./tournaments.css";
import MatchCard from "./match-card";
import { getSchedule } from "../api/services";

export default function Tournament() {
    const [cards, setCardsData] = useState([{
        category:'',
        matches:''
    }]);


    async function getData() {
        const res = await getSchedule()
        setCardsData(res.data);

    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div style={{ marginTop: 0 }}>
            <Container>
                <Row>
                    {cards.map((d, index) => (
                        <Col>
                            <MatchCard title={d.category.toUpperCase()} matches={d.matches} />
                        </Col>
                    ))}

                </Row>
            </Container>
        </div>
    )
}