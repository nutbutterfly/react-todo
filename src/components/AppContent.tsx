import React, { ChangeEvent, FormEvent, useState } from 'react'

import Container from 'react-bootstrap/esm/Container';

import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Todo from './Todo';

export interface ITodo {

    key: string,

    text: string,

    isCompleted: boolean

};

function AppContent() {

    const [text, setText] = useState<string>('');

    const [data, setData] = useState<ITodo[]>([]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (text.trim().length === 0) {
            setText('');
            return;
        }

        var x: ITodo = {
            key: (Math.random() * 1000).toString(),
            text: text.trim(),
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
                        <Button variant="primary" type="submit">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>

            {
                data.map((it) => (
                    <Todo key={it.key} todo={it} />
                ))
            }
        </Container>
    );
}

export default AppContent;