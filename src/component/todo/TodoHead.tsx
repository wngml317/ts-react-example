import styled from "styled-components";
import { Todo } from "../../slice/todoSlice";

const TodoHeadBlock = styled.div`
    padding: 10px 30px;
    border-bottom: 1px solid #e9ecef;
    
    .h1 {
        color: #343a40;
    }
    .day {
        color: #868e96;
        font-size: 20px;
        font-weight: bold;
    }
    .left-task {
        color: #20c997;
        font-size: 18px;
        font-weight: bold;
        // margin-top: 10px;
        margin: 20px 0px;
    }
`

interface TodoHeadProps {
    todoList: Todo[]
}

const TodoHead = ({todoList}: TodoHeadProps) => {
    if (todoList === undefined) todoList = []
    const today = new Date();
    const dateString = today.toLocaleDateString("ko-KR",{
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    const dayName = today.toLocaleDateString("ko-KR", {weekday: "long"})
    const undoneTask = todoList.filter(todo => !todo.done);
    return (
        <TodoHeadBlock>
            <h1>{dateString}</h1>
            <div className="day">{dayName}</div>
            <div className="left-task">할 일 {undoneTask.length} 개 남음</div>
        </TodoHeadBlock>
    )
}

export default TodoHead;