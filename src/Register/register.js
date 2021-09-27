import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export default function Login() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [errors, setErrors] = useState({
        "name" : "",
        "email" : "",
        "password" : "",
        "cpassword" : ""
    });
    const [isValid, setValid] = useState(true);

    function handleSubmit(event) {
        event.preventDefault();

        if(validate()) {
            alert('Demo Form is submited');
        }

    }

    function validate() {
        setValid(true);

        if (!name) {
            setValid(false);
            setErrors({"name" : "Name cannot be empty"});
            console.log({errors});
        }

        if (!email) {
            setValid(false);
            setErrors({"email" : "Please enter your email Address"});
        }
        
        if (!password) {
            setValid(false);
            setErrors({"password" : "Please enter your password"});
        }

        if (!cpassword) {
            setValid(false);
            setErrors({"cpassword" : "Please re-enter your password"});
        }

        if (typeof password !== "undefined" && typeof cpassword !== "undefined") { 
            if (password !== cpassword) {
                setValid(false);
                setErrors({"password" : "Passwords don't match"});
            }
        } 
    }


    return (
        <div className="registerall">
        <Form onSubmit={handleSubmit}>
            <h1> Get started with today! Create your account by filling the information below</h1>
            <Form.Group className="mb-3" controlId="User">
                <Form.Label>Full Name</Form.Label>
                <Form.Control 
                    autoFocus 
                    type="name" 
                    placeholder="Enter Your full name"  
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
                <div className="text-danger">{errors.name}</div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter Your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Password">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <Form.Text className="text-muted">Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="ConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Confirm Your Password"
                    value={cpassword}
                    onChange={(e) => setCpassword(e.target.value)} />
            </Form.Group>
            <Form.Label>User Type</Form.Label>
            <Form.Select aria-label="Usertype">
                <option value="">Public</option>
                <option value="1">Player</option>
                <option value="2">Coach</option>
                <option value="3">Referee</option>
                <option value="4">Refree Director</option>
                <option value="5">Team Director</option>
            </Form.Select>
            <Button variant="primary" type="submit">Register</Button>
            <span className="form-input-login">Already have an account? Login <a href="#">here</a></span>
            </Form>
            </div>
        );
}

