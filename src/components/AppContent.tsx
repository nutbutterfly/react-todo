import React, { ChangeEvent, FormEvent, useState } from 'react'

import Container from 'react-bootstrap/esm/Container';

import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Todo from './Todo';
import ListGroup from 'react-bootstrap/ListGroup';

export interface ITodo {

    text: string,

    isCompleted: boolean

};

function AppContent() {

    const [text, setText] = useState<string>('');

    const [data, setData] = useState<ITodo[]>([]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        var x: ITodo = {
            text: text,
            isCompleted: false
        };

        setData([...data, x]);

        setText('');
    };

    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    return (
        <Container className="my-4">
            <Jumbotron>
                <h1>Hello, ReactJS World!</h1>
                <p>The POC project to learn how to build SPA with ReactJS</p>
            </Jumbotron>

            <Form onSubmit={handleSubmit}>
                <InputGroup className="mb-3">
                    <FormControl type="text" placeholder="What's to-do?" value={text} onChange={handleTextChange} />
                    <InputGroup.Append>
                        <Button variant="primary" type="submit">Add</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>

            <ListGroup>
                {
                    data.map((it) => (
                        <ListGroup.Item><Todo todo={it} /></ListGroup.Item>
                    ))
                }
            </ListGroup>
        </Container>
    );
}

export default AppContent;