import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { addUser } from '../api/services';
import "./AddUserForm.css";
import { Link ,useHistory} from "react-router-dom";

export default function AddUserForm() {

    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    async function handleSubmit(event) {

        let user = {
            "email" : email,
            "role" : role,
            "password" : password
        }

        let x=await addUser(user);
        history.push("/add-users");

    }

    return (
        <body>
        <div style={{marginTop:60}} className="adduserform">
        <h6 className='central_heading'>Add a new User!!</h6>
        <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="Email">
                <Form.Label>Email Address<label className="text-danger">*</label></Form.Label>
                <Form.Control 
                    required
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>
            <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="Role">
                <Form.Label>Role<label className="text-danger">*</label></Form.Label>
                <Form.Control 
                    required
                    type="text" 
                    value={role}
                    onChange={(e) => setRole(e.target.value)}/>
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="Password">
                <Form.Label>Password<label className="text-danger">*</label></Form.Label>
                <Form.Control 
                    required
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            </Row>
          <div className='central_heading'><Button variant="primary" type="submit" className='btn-primary'>Submit</Button></div>
            </Form>
            </div>
            </body>
        );
}