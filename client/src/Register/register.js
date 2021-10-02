import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


export default function Login() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [usertype, setUsertype] = useState("");
    const [Nameerror, setNameError] = useState("");
    const [Emailerror, setEmailError] = useState("");
    const [Passworderror, setPasswordError] = useState("");
    const [Cpassworderror, setCpasswordError] = useState(""); 
    const [isValid, setValid] = useState(false);

    function handleSubmit(event) {

        if(validate()) {
            alert('Demo Form is submited');
        }
        else {
            alert('Demo Form  is not submited');
            event.preventDefault();
        }

    }

    function validate() {

        console.log(usertype);

        if(name.length < 2 ) {
            setNameError("Name cannot be less than 2 characters!!");
            setValid(false);
            return isValid;
        }
        else
            setNameError("");

        if(email.length < 1) {
            setEmailError("Email cannot be empty!!");
            setValid(false);
        }
        else 
            setEmailError("");

        if(password.length < 8) {
            setPasswordError("Password cannot be less than 8 characters");
            setValid(false);
            return isValid;
        }
        else 
            setPasswordError("");

        if(password !== cpassword) {
            setCpasswordError("Password and Confrim Password doesn't match!!");
            setValid(false);
            return isValid;
        }
        else 
            setCpasswordError("");

        return true;
    }

    return (
        <div className="registerall">
        <Form onSubmit={handleSubmit} >
            {/* <h1> Get started with today! Create your account by filling the information below</h1> */}
            <Form.Group className="mb-3" controlId="User">
                <Form.Label>Full Name</Form.Label>
                <Form.Control 
                    autoFocus 
                    type="name" 
                    placeholder="Enter Your full name"  
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
                {Nameerror && <div>{Nameerror}</div>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="Email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter Your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                <div className="text-danger">{Emailerror}</div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Password">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <Form.Text className="text-muted">Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</Form.Text>
                <div className="text-danger">{Passworderror}</div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="ConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Confirm Your Password"
                    value={cpassword}
                    onChange={(e) => setCpassword(e.target.value)} />
                <div className="text-danger">{Cpassworderror}</div>
            </Form.Group>
            <Form.Label>User Type</Form.Label>
            <Form.Select aria-label="Usertype" value={usertype} onChange={(e) => setUsertype(e.target.value)}  >
                <option value="Select an option">Select an option</option>
                <option value="Public">Public</option>
                <option value="Player">Player</option>
                <option value="Coach">Coach</option>
                <option value="Referee">Referee</option>
                <option value="Refree Director">Refree Director</option>
                <option value="Team Director">Team Director</option>
            </Form.Select>
            <Button variant="primary" type="submit">Register</Button>
            <span className="form-input-login">Already have an account?<Link to={"/sign-in"}>Sign In</Link></span>
            </Form>
            </div>
        );
}

