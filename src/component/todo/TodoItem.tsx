import React from "react";
import { Todo } from "../../slice/todoSlice";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from 'react-icons/md';

const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
    color: #ff6b6b;
    }
    display: none;
`;
const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover {
        ${Remove} {
            display: initial;
        }
    }
`
const CheckCircle = styled.div<{done?: Boolean}>`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;

    ${prpos => 
        prpos.done && 
        css`
            border: 1px solid #39d9a9;
            color: #38d9a9;
        `}

`
const Text = styled.div<{done?: Boolean}>`
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${props =>
        props.done &&
        css`
        color: #ced4da;
        `}

`

interface TodoItemProps {
    todo: Todo;
    onToggle: ({_id, done}: Todo) => void;
    onRemove: (_id: String) => void;
} 

const TodoItem = ({todo, onToggle, onRemove}: TodoItemProps) => {
    return (
        <TodoItemBlock>
            <CheckCircle key={todo._id} done={todo.done} onClick={() => onToggle({_id: todo._id, done: todo.done})}>
                {todo.done && <MdDone />}
            </CheckCircle>
            <Text done={todo.done}>{todo.text}</Text>
            <Remove>
                <MdDelete onClick={() => onRemove(todo._id)}>삭제</MdDelete>
            </Remove>
        </TodoItemBlock>
    )
}

export default TodoItem;