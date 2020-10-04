import React from 'react'
import { ITodo } from './AppContent';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export interface TodoProps {

    todo: ITodo

}

const Todo: React.FC<TodoProps> = props => {
    const handleComplete = (key: string) => {
        console.log(key);
    };

    const handleDelete = (key: string) => {
        console.log(key);
    };
    return (
        <div className="my-1">
            <InputGroup>
                <FormControl disabled={true} value={props.todo.text} />
                <InputGroup.Append>
                    <Button variant="primary" onClick={e => handleComplete(props.todo.key)}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z" />
                        </svg>
                    </Button>
                    <Button variant="danger" onClick={e => handleDelete(props.todo.key)}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}

export default Todo;