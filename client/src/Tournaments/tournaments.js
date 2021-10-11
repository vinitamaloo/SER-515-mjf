import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Row, Col, Card, Container} from "react-bootstrap";
import "./tournaments.css";
import MatchCard from "./match-card";

export default function Tournament() {
    return(
        <div style={{ marginTop: 60 }}>
            <Container>
                <Row>
                    <Col>
                        <MatchCard title="title" subtitle="subtitle"/>
                    </Col>
                    <Col>
                        <MatchCard title="title" subtitle="subtitle"/>
                    </Col>
                    <Col>
                       <MatchCard title="title" subtitle="subtitle"/>
                    </Col>
                </Row>
                 <Row>
                    <Col>
                        <MatchCard title="title" subtitle="subtitle"/>
                    </Col>
                    <Col>
                        <MatchCard title="title" subtitle="subtitle"/>
                    </Col>
                    <Col>
                        <MatchCard title="title" subtitle="subtitle"/>
                    </Col>
                </Row> 
            </Container>
        </div>
    )
}