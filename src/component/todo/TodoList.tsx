import React from "react";
import { Todo } from "../../slice/todoSlice";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const TodoListBlock = styled.div`
    padding: 30px;
`
const Text = styled.div`
    padding: 20px;
    font-size: 20px;
`

interface TodoListProps {
    todoList: Todo[];
    onToggle: ({_id, done}: Todo) => void;
    onRemove: (_id: String) => void;
}
const TodoList = ({todoList, onToggle, onRemove}: TodoListProps) => {
    if (todoList === undefined) todoList = []
    if( todoList.length === 0) {
        return <Text>등록된 일정이 없습니다.</Text>
    }
    return (
        <TodoListBlock>
            {todoList.map(
                todo => 
                    <TodoItem key={todo._id} todo={todo} onToggle={onToggle} onRemove={onRemove} />
            )}
        </TodoListBlock>
    )
}

export default TodoList;