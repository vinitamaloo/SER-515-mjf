

import { Link } from "react-router-dom";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="login">
        <Form onSubmit={handleSubmit}>
            <h3>Sign In</h3>
            <Form.Group className="mb-3" controlId="Email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter Your email" 
                   />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Password">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Enter Your Password"
                    />
            </Form.Group>
            
            
            <Button variant="primary" type="submit">Log In</Button>
            <br/>
            <span className="form-input-login" >Don't have an account?<Link to={"/sign-up"}>Sign up</Link></span>
            </Form>
            </div>
  );
}