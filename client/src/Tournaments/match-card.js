import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./match-card.css";

export default function MatchCard({ title, matches }) {

    return (

        <Card className="card">
            <Card.Body>
                <Card.Title className="title" style={{justifyContent:"center"}}>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <Card.Text>
                    Click on the below links for more info.
                </Card.Text>
                <div className="cardLink">
                    <Card.Link><Link
                        to={{
                            pathname: "/schedule",
                            state: { matches: matches , title: title},
                        }}
                    >Schedule</Link></Card.Link>

                    <Card.Link><Link to={"/standings"}
                    to={{
                        pathname: "/standings",
                        state: { title: title },
                    }}
                    >Standing</Link></Card.Link>

                    <Card.Link><Link to={
                        {
                            pathname: "/results",
                            state: {title:title},
                        }}>Results</Link></Card.Link>
                </div>
            </Card.Body>
        </Card>
    )
}
