import React from 'react'

import Container from 'react-bootstrap/esm/Container';

import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'

function AppContent() {
    return (
        <Container className="my-4">
            <Jumbotron>
                <h1>Hello, ReactJS World!</h1>
                <p>The POC project to learn how to build SPA with ReactJS</p>
                <p>
                    <Button variant="primary">Let's Rock</Button>
                </p>
            </Jumbotron>
        </Container>
    );
}

export default AppContent;