import { Link } from "react-router-dom";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
import { getPostsData , getData} from "../api/services";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function getPosts() {
    const posts = await getPostsData();
    console.log(posts);
    const data = await getData();
    console.log(data);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(email+" "+password);
    await getPosts();
  }

  return (
    <div className="auth-wrapper loginBody">
      <div className="auth-inner">
        <div className="login">
          <Form onSubmit={handleSubmit}>
            <h3>Sign In</h3>
            <Form.Group className="mb-3" controlId="Email">
            <Form.Select aria-label="Default select example">
              <option>Please select</option>
              <option value="1">Piyush Rewatkar</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Your email"
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Your Password"
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">Log In</Button>
            <br />
            <span className="form-input-login" >Don't have an account?<Link to={"/sign-up"}>Sign up</Link></span>
          </Form>
        </div>
      </div>
    </div>
  );
}