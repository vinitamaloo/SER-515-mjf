import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./match-card.css";

export default function MatchCard({ title, matches }) {
    
    return (

        <Card className="card">
            <Card.Body>
                <Card.Title className="title">{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <div className="cardLink">
                    <Card.Link><Link
                        to={{
                            pathname: "/schedule",
                            state: { matches: matches , title: title},
                        }}
                    >Schedule</Link></Card.Link>
                    <Card.Link><Link to={"/sign-in"}>Standing</Link></Card.Link>
                    <Card.Link><Link to={"/sign-in"}>Results</Link></Card.Link>
                </div>
            </Card.Body>
        </Card>
    )
}