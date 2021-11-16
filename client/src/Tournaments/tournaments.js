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
                        <MatchCard title="U17 Girls" subtitle="United (7v7)"/>
                    </Col>
                    <Col>
                        <MatchCard title="U17 Boys" subtitle="United (7v7)"/>
                    </Col>
                    <Col>
                       <MatchCard title="U14 Boys" subtitle="Green"/>
                    </Col>
                </Row>
                 <Row>
                    <Col>
                        <MatchCard title="U15" subtitle="United U15"/>
                    </Col>
                    <Col>
                        <MatchCard title="U16" subtitle="United U16"/>
                    </Col>
                    <Col>
                        <MatchCard title="U11" subtitle="United (9v9)"/>
                    </Col>
                </Row> 
            </Container>
        </div>
    )
}