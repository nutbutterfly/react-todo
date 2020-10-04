import React from 'react'
import { ITodo } from './AppContent';

export interface TodoProps {

    todo: ITodo

}

const Todo: React.FC<TodoProps> = props => {
    return (
        <div>{props.todo.text}</div>
    )
}

export default Todo;