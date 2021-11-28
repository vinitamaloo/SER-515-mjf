import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
 import { Link } from "react-router-dom";
import { getAllTeams } from '../api/services';
import { postSetScores } from '../api/services';
import "./set_scores.css";


export default function Login() {

    const [TeamA, setTeamA] = useState("");
    const [TeamB, setTeamB] = useState("");
    const [TeamAGoals, setTeamAGoals] = useState("");
    const [TeamBGoals, setTeamBGoals] = useState("");
    const [TeamAPossession, setTeamAPossession] = useState("");
    const [TeamBPossession, setTeamBPossession] = useState("");
    const [TeamAFouls, setTeamAFouls] = useState("");
    const [TeamBFouls, setTeamBFouls] = useState("");
    const [TeamAYellowCards, setTeamAYellowCards] = useState("");
    const [TeamBYellowCards, setTeamBYellowCards] = useState("");
    const [TeamARedCards, setTeamARedCards] = useState("");
    const [TeamBRedCards, setTeamBRedCards] = useState("");
    const [TeamAOffSides, setTeamAOffSides] = useState("");
    const [TeamBOffSides, setTeamBOffSides] = useState("");
    const [TeamACornerKicks, setTeamACornerKicks] = useState("");
    const [TeamBCornerKicks, setTeamBCornerKicks] = useState("");
    const [TeamASaves, setTeamASaves] = useState("");
    const [TeamBSaves, setTeamBSaves] = useState("");
    const [TeamAResult, setTeamAResult] = useState("");
    const [TeamBResult, setTeamBResult] = useState("");
    const [TeamAScore, setTeamAScore] = useState("");
    const [TeamBScore, setTeamBScore] = useState("");
    const [Date, setDate] = useState("");
    const [GameTime, setGameTime] = useState("");
    const [Category, setCategory] = useState("");
    const [status, setStatus] = useState({"Team Status": "Registered"})
    const [tableData, setTableData] = useState([{}]);
    const [flag, setFlag] = useState(true);
    const [isValid, setValid] = useState(false);
//    getList();


//    async function getList() {
//        const x = await getAllTeams(status);
//        setTableData(x.data);
//        console.log(tableData);
//        setFlag(false);
//    }


    async function handleSubmit(event) {

        if(validate()) {
            alert('Match results are submitted');
            let statistics = {
                "teamA": TeamA,
                "teamB" : TeamB,
                "teamAGoals" : TeamAGoals,
                "teamBGoals" : TeamBGoals,
                "teamAPossession" : TeamAPossession,
                "teamBPossession" : TeamBPossession,
                "teamAFouls" : TeamAFouls,
                "teamBFouls" : TeamBFouls,
                "teamAYellowCards" : TeamAYellowCards,
                "teamBYellowCards" : TeamBYellowCards,
                "teamARedCards" : TeamARedCards,
                "teamBRedCards" : TeamBRedCards,
                "teamAOffSides" : TeamAOffSides,
                "teamBOffSides" : TeamBOffSides,
                "teamACornerKicks" : TeamACornerKicks,
                "teamBCornerKicks" :TeamBCornerKicks,
                "teamASaves" : TeamASaves,
                "teamBSaves" : TeamBSaves,
                "teamAResult" : TeamAResult,
                "teamBResult" : TeamBResult,
                "teamAScore": TeamAScore,
                "teamBScore": TeamBScore,
                "date": Date,
                "gameTime": GameTime,
                "category": Category
            }
            let x=await postSetScores(statistics);
            console.log(x);
        }
        else {
            alert('Statistics are not submitted');
            event.preventDefault();
        }
    }

    function validate() {

        var pattern = new RegExp(/^[0-9\b]+$/);

        if(!pattern.test(TeamAGoals)) {
            setValid(false);
            return isValid;
        }

        if(!pattern.test(TeamBGoals)) {
            setValid(false);
            return isValid;
        }

        if(!pattern.test(TeamAFouls)) {
                    setValid(false);
                    return isValid;
        }

        if(!pattern.test(TeamBFouls)) {
                    setValid(false);
                    return isValid;
        }

        if(!pattern.test(TeamAYellowCards)) {
                    setValid(false);
                    return isValid;
        }

        if(!pattern.test(TeamBYellowCards)) {
                    setValid(false);
                    return isValid;
        }

        if(!pattern.test(TeamARedCards)) {
                    setValid(false);
                    return isValid;
        }

        if(!pattern.test(TeamBRedCards)) {
                    setValid(false);
                    return isValid;
        }

        if(!pattern.test(TeamAOffSides)) {
                    setValid(false);
                    return isValid;
        }

        if(!pattern.test(TeamBOffSides)) {
                    setValid(false);
                    return isValid;
        }

        if(!pattern.test(TeamACornerKicks)) {
                    setValid(false);
                    return isValid;
        }

        if(!pattern.test(TeamBCornerKicks)) {
                    setValid(false);
                    return isValid;
        }

        if(!pattern.test(TeamASaves)) {
                    setValid(false);
                    return isValid;
        }

        if(!pattern.test(TeamBSaves)) {
                    setValid(false);
                    return isValid;
        }
        return true;
    }

    return (
        <body>
            <div className='bg-cont'>
                <div className='main_heading'>Enter Match Statistics</div>

                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                        <Form.Group className="mb-3" controlId="selectteam">
                            <Form.Label>Select Team A<label className="text-danger">*</label></Form.Label>
                            <Form.Select aria-label="available" required value={TeamA} onChange={(e) => setTeamA(e.target.value)}  >
                                <option value="Select an option">Select an option</option>
                                <option value="Team AZ">Team AZ</option>
                                <option value="Sun Devils">Sun Devils</option>
                                <option value="Sparky">Sparky</option>
                                <option value="Monarchy">Monarchy</option>
                                <option value="Salsa">Salsa</option>
                                <option value="Queens">Queens</option>
                                <option value="Maniacs">Maniacs</option>
                                <option value="Rebels">Rebels</option>
                                <option value="Lightning">Lightning</option>


                            </Form.Select>
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className="mb-3" controlId="selectteam">
                            <Form.Label>Select Team B<label className="text-danger">*</label></Form.Label>
                            <Form.Select aria-label="available" required value={TeamB} onChange={(e) => setTeamB(e.target.value)}  >
                                <option value="Select an option">Select an option</option>
                                <option value="Team AZ">Team AZ</option>
                                <option value="Sun Devils">Sun Devils</option>
                                <option value="Sparky">Sparky</option>
                                <option value="Monarchy">Monarchy</option>
                                <option value="Salsa">Salsa</option>
                                <option value="Queens">Queens</option>
                                <option value="Maniacs">Maniacs</option>
                                <option value="Rebels">Rebels</option>
                                <option value="Lightning">Lightning</option>

                            </Form.Select>
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group as={Col} className="mb-3" controlId="date">
                            <Form.Label>Date<label className="text-danger">*</label></Form.Label>
                            <Form.Control
                                required
                                type="date"
                                placeholder="Date"
                                value={Date}
                                onChange={(e) => setDate(e.target.value)}/>
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3" controlId="gameTime">
                            <Form.Label>Total Game Time<label className="text-danger">*</label></Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Total Game Time"
                                value={GameTime}
                                onChange={(e) => setGameTime(e.target.value)}/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} className="mb-3" controlId="teamAGoals">
                            <Form.Label>Team A Goals<label className="text-danger">*</label></Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Goals"
                                value={TeamAGoals}
                                onChange={(e) => setTeamAGoals(e.target.value)}/>
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3" controlId="teamBGoals">
                            <Form.Label>Team B Goals<label className="text-danger">*</label></Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Goals"
                                value={TeamBGoals}
                                onChange={(e) => setTeamBGoals(e.target.value)}/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} className="mb-3" controlId="teamAPossession">
                            <Form.Label>Team A Possession<label className="text-danger">*</label></Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Percentage"
                                value={TeamAPossession}
                                onChange={(e) => setTeamAPossession(e.target.value)}/>
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3" controlId="teamBPossession">
                            <Form.Label>Team B Goals<label className="text-danger">*</label></Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Percentage"
                                value={TeamBPossession}
                                onChange={(e) => setTeamBPossession(e.target.value)}/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} className="mb-3" controlId="teamAFouls">
                            <Form.Label>Team A Fouls<label className="text-danger">*</label></Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Fouls"
                                value={TeamAFouls}
                                onChange={(e) => setTeamAFouls(e.target.value)}/>
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3" controlId="teamBFouls">
                            <Form.Label>Team B Fouls<label className="text-danger">*</label></Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Fouls"
                                value={TeamBFouls}
                                onChange={(e) => setTeamBFouls(e.target.value)}/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} className="mb-3" controlId="teamAYellowCards">
                            <Form.Label>Team A Yellow Cards<label className="text-danger">*</label></Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Yellow Cards"
                                value={TeamAYellowCards}
                                onChange={(e) => setTeamAYellowCards(e.target.value)}/>
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3" controlId="teamBYellowCards">
                            <Form.Label>Team B Yellow Cards<label className="text-danger">*</label></Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Yellow Cards"
                                value={TeamBYellowCards}
                                onChange={(e) => setTeamBYellowCards(e.target.value)}/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} className="mb-3" controlId="teamARedCards">
                            <Form.Label>Team A Red Cards<label className="text-danger">*</label></Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Red Cards"
                                value={TeamARedCards}
                                onChange={(e) => setTeamARedCards(e.target.value)}/>
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3" controlId="teamBRedCards">
                            <Form.Label>Team B Red Cards<label className="text-danger">*</label></Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Red Cards"
                                value={TeamBRedCards}
                                onChange={(e) => setTeamBRedCards(e.target.value)}/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} className="mb-3" controlId="teamAOffSides">
                            <Form.Label>Team A Off Sides<label className="text-danger">*</label></Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Off Sides"
                                value={TeamAOffSides}
                                onChange={(e) => setTeamAOffSides(e.target.value)}/>
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3" controlId="teamBOffSides">
                            <Form.Label>Team B Off Sides<label className="text-danger">*</label></Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Off Sides"
                                value={TeamBOffSides}
                                onChange={(e) => setTeamBOffSides(e.target.value)}/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} className="mb-3" controlId="teamACornerKicks">
                            <Form.Label>Team A Corner Kicks<label className="text-danger">*</label></Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Corner Kicks"
                                value={TeamACornerKicks}
                                onChange={(e) => setTeamACornerKicks(e.target.value)}/>
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3" controlId="teamBCornerKicks">
                            <Form.Label>Team B Corner Kicks<label className="text-danger">*</label></Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Corner Kicks"
                                value={TeamBCornerKicks}
                                onChange={(e) => setTeamBCornerKicks(e.target.value)}/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} className="mb-3" controlId="teamASaves">
                            <Form.Label>Team A Saves<label className="text-danger">*</label></Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Saves"
                                value={TeamASaves}
                                onChange={(e) => setTeamASaves(e.target.value)}/>
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3" controlId="teamBSaves">
                            <Form.Label>Team B Saves<label className="text-danger">*</label></Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Saves"
                                value={TeamBSaves}
                                onChange={(e) => setTeamBSaves(e.target.value)}/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} className="mb-3" controlId="teamAResult">
                            <Form.Label>Team A Result<label className="text-danger">*</label></Form.Label>
                            <Form.Select aria-label="grade" required value={TeamAResult} onChange={(e) => setTeamAResult(e.target.value)}  >
                                <option value="Select an option">Select an option</option>
                                <option value="Win">Win</option>
                                <option value="Lose">Lose</option>
                                <option value="Draw">Draw</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3" controlId="teamBResult">
                            <Form.Label>Team B Result<label className="text-danger">*</label></Form.Label>
                            <Form.Select aria-label="grade" required value={TeamBResult} onChange={(e) => setTeamBResult(e.target.value)}  >
                                <option value="Select an option">Select an option</option>
                                <option value="Win">Win</option>
                                <option value="Lose">Lose</option>
                                <option value="Draw">Draw</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} className="mb-3" controlId="teamBResult">
                            <Form.Label>Category<label className="text-danger">*</label></Form.Label>
                            <Form.Select aria-label="grade" required value={Category} onChange={(e) => setCategory(e.target.value)}  >
                                <option value="Select an option">Select an option</option>
                                <option value="boysU08">boysU08</option>
                                <option value="boysU09">boysU09</option>
                                <option value="boysU10">boysU10</option>
                                <option value="boysU11">boysU11</option>
                                <option value="boysU12">boysU12</option>
                                <option value="boysU13">boysU13</option>
                                <option value="boysU14">boysU14</option>
                                <option value="boysU15">boysU15</option>
                                <option value="boysU16">boysU16</option>
                                <option value="boysU17">boysU17</option>
                                <option value="boysU18">boysU18</option>
                                <option value="boysU19">boysU19</option>
                                <option value="girlsU08">girlsU08</option>
                                <option value="girlsU09">girlsU09</option>
                                <option value="girlsU10">girlsU10</option>
                                <option value="girlsU11">girlsU11</option>
                                <option value="girlsU12">girlsU12</option>
                                <option value="girlsU13">girlsU13</option>
                                <option value="girlsU14">girlsU14</option>
                                <option value="girlsU15">girlsU15</option>
                                <option value="girlsU16">girlsU16</option>
                                <option value="girlsU17">girlsU17</option>
                                <option value="girlsU18">girlsU18</option>
                                <option value="girlsU19">girlsU19</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <br></br>
                    <Row>
                        <Button variant="primary" type="submit" className='btn-primary'>Submit Results</Button>
                    </Row>
                </Form>
            </div>
        </body>
    );
 }