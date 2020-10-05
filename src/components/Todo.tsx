import React from 'react'
import { ITodo } from './AppContent';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export interface TodoProps {

    todo: ITodo,

    callback: (id: string, action: string) => void

}

const Todo: React.FC<TodoProps> = props => {
    const handleStatus = (todo: ITodo) => {
        if (todo.isDone) {
            props.callback(todo.id, 'UNDONE');
        } else {
            props.callback(todo.id, 'DONE');
        }
    };

    const handleDelete = (key: string) => {
        props.callback(key, 'DELETE');
    };
    return (
        <div className="my-1">
            <InputGroup>
                <FormControl disabled={true} value={props.todo.text} className={props.todo.isDone ? 'todo---done' : 'todo---undone'} />
                <InputGroup.Append>
                    <Button variant={props.todo.isDone ? 'secondary' : 'primary'} onClick={e => handleStatus(props.todo)}>
                        {
                            props.todo.isDone ?
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                                :
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z" />
                                </svg>
                        }
                    </Button>
                    <Button variant="danger" onClick={e => handleDelete(props.todo.id)}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}

export default Todo;