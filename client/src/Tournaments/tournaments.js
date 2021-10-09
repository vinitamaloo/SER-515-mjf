import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Row, Col, Card, Container} from "react-bootstrap";
import "./tournaments.css";

export default function Tournament() {
    return(
        <div style={{ marginTop: 60 }}>
            <Container>
                <Row>
                    <Col>
                        <Card className="card">
                            <Card.Body>
                                <Card.Title className="title">Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <div className="cardLink">
                                    <Card.Link><Link to={"/sign-in"}>Schedule</Link></Card.Link>
                                    <Card.Link><Link to={"/sign-in"}>Standing</Link></Card.Link>
                                    <Card.Link><Link to={"/sign-in"}>Results</Link></Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card">
                            <Card.Body>
                                <Card.Title className="title">Card Title</Card.Title >
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <div className="cardLink">
                                    <Card.Link><Link to={"/sign-in"}>Schedule</Link></Card.Link>
                                    <Card.Link><Link to={"/sign-in"}>Standing</Link></Card.Link>
                                    <Card.Link><Link to={"/sign-in"}>Results</Link></Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card">
                            <Card.Body>
                                <Card.Title className="title">Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <div className="cardLink">
                                    <Card.Link><Link to={"/sign-in"}>Schedule</Link></Card.Link>
                                    <Card.Link><Link to={"/sign-in"}>Standing</Link></Card.Link>
                                    <Card.Link><Link to={"/sign-in"}>Results</Link></Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="card">
                            <Card.Body>
                                <Card.Title className="title">Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <div className="cardLink">
                                    <Card.Link><Link to={"/sign-in"}>Schedule</Link></Card.Link>
                                    <Card.Link><Link to={"/sign-in"}>Standing</Link></Card.Link>
                                    <Card.Link><Link to={"/sign-in"}>Results</Link></Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card">
                            <Card.Body>
                                <Card.Title className="title">Card Title</Card.Title >
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <div className="cardLink">
                                    <Card.Link><Link to={"/sign-in"}>Schedule</Link></Card.Link>
                                    <Card.Link><Link to={"/sign-in"}>Standing</Link></Card.Link>
                                    <Card.Link><Link to={"/sign-in"}>Results</Link></Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card">
                            <Card.Body>
                                <Card.Title className="title">Card Title</Card.Title >
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <div className="cardLink">
                                    <Card.Link><Link to={"/sign-in"}>Schedule</Link></Card.Link>
                                    <Card.Link><Link to={"/sign-in"}>Standing</Link></Card.Link>
                                    <Card.Link><Link to={"/sign-in"}>Results</Link></Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}