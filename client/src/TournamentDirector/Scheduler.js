import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { startScheduler } from '../api/services';
import "./Scheduler.css";

export default function Scheduler() {
    const [flag, setFlag] = useState()

    async function handleSubmit(event) {
        event.preventDefault();
        await startScheduler();
    }

    return (
        <div className='central_heading'>
            <Form onSubmit={handleSubmit}>
                <Button variant="primary" type="Submit" className='btn-primary'>Start Scheduler</Button>
            </Form>
        </div>
        )
}
