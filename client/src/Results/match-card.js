import { Link } from "react-router-dom";
import { Card} from "react-bootstrap";
import { Row, Col, Container} from "react-bootstrap";
import "./match-card.css";
import { FaFootballBall } from "react-icons/fa";

export default function MatchCard( {date, team1, team2, time, goals1, goals2, playerGoals1, playerGoals2}) {
    return(
    <div className ="center">
        <Card className="cards">
            <Card.Body>
                <Card.Title className="title">
                    <div className="TeamTitle">{team1}  vs   {team2}</div>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    <div className="DateDisplay">{date}</div>
                </Card.Subtitle>
                <Card.Text>
                  <Container fluid="md">
                          <Row>
                              <Col className="Team" md="auto">{team1}</Col>
                              <Col className="center">
                                  <p className="GoalsScored">{goals1}</p>
                              </Col>
                              <Col className="center">
                                  <p>{time}</p>
                              </Col>
                              <Col className="center">
                                  <p className="GoalsScored">{goals2}</p>
                              </Col>
                              <Col className="Team" md="auto">{team2}</Col>
                          </Row>
                          <Row xs={12}>
                            <Col className="Goals" xs={6}>
                                <div className="center">
                                    <FaFootballBall />
                                    <p className="Players-goal">Ronaldo-2, Benne-1</p>
                                </div>
                            </Col>
                            <Col className="Goals" xs={6}>
                                <div className="center">
                                    <FaFootballBall />
                                    <p className="Players-goal">Javier-1</p>
                                </div>
                            </Col>
                        </Row>
                  </Container>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    )
}
