import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hook"
import { Todo, selectTodo, todoAllAsync, todoRemoveAsync, todoUpdateAsync } from "../../slice/todoSlice";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";
import styled from "styled-components";
import TodoHead from "./TodoHead";

const TodoTemplateBlock = styled.div`
    width: 512px;
    height: 768px;

    position: relative;

    border-radius: 15px;
    background: white;
    
    margin: 50px auto;
    justify-content: center;
    flex-direction: column;
`

const TodoApp = () => {
    const dispatch = useAppDispatch();
    // const todoList = useSelector((state: RootState) => state.todo.todoList)
    const todoList = useAppSelector(selectTodo);

    // 리액트는 컴포넌트가 유지되는 한 dispatch 함수가 항상 같다는 것을 보장
    // 해당 함수는 컴포넌트가 업데이트 되는 경우가 아닌 마운트되는 경우에만 호출
    useEffect(() => {
        dispatch(todoAllAsync());
    }, [dispatch]);

    const onToggle = (data: Todo) => {
        dispatch(todoUpdateAsync(data));
    }
    const onRemove = (_id: String) => {
        dispatch(todoRemoveAsync(_id));
    }
    return (
        <TodoTemplateBlock>
            <TodoHead todoList={todoList} />
            <TodoCreate />
            <TodoList todoList={todoList} onToggle={onToggle} onRemove={onRemove} />
        </TodoTemplateBlock>
    )
}

export default TodoApp;