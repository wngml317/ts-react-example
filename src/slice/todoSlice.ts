import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../app/store";

export interface Todo {
    _id: any;
    text?: String;
    done: Boolean;
}
export interface todoState {
    todoList: Todo[];
}

const initialState: todoState = {
    todoList: []
}

export const todoAddAsync = createAsyncThunk(
    "todo/todoAdd", // 액션 이름 정의
    async (text: String) => {   // 비동기 호출 함수 정의
        const result = await axios.post("/api/todo/add", {text: text})
        return result.data.todo;
    }
)
export const todoAllAsync = createAsyncThunk(
    "todo/todoAll",
    async () => {
        const result = await axios.get("/api/todo/all");
        return result.data.todoList;
    }
)
export const todoUpdateAsync = createAsyncThunk(
    "todo/todoUpdate",
    async (data: Todo) => {
        const { _id, done } = data
        const result = await axios.put("/api/todo/update/" + _id, {done: !done} )
        return result.data.todo;
    }
)
export const todoRemoveAsync = createAsyncThunk(
    "todo/todoRemove",
    async (_id: String) => {
        await axios.delete("/api/todo/remove/"+ _id);
        return _id
    }
)

// 슬라이스 생성
export const todoSlice = createSlice({
    name: "todo",   
    initialState,  
    // 상태 업데이트 방법을 정의하는 리듀서 함수
    reducers: {
    },
    // createSlice가 생성한 액션 타입 외 다른 액션 타입에 응답할 수 있다.
    // 외부의 액션을 참조
    extraReducers: (builder) => {
        builder
        // createAsyncThunk를  선언하게 되면 첫번째 파라미터로 선언한 액션 이름의 상태에 대한 action 자동으로 생성
        // pending: 비동기 호출전, fulfilled: 비동기 호출성공, rejected: 비동기 호출실패
        // .addCase(todoAddAsync.pending, (state) => {})
        // .addCase(todoAddAsync.rejected, (state) => {})
        .addCase(todoAddAsync.fulfilled, (state, action) => {
            state.todoList = state.todoList?.concat(action.payload);
        })
        .addCase(todoAllAsync.fulfilled, (state, action) => {
            state.todoList = action.payload
        })
        .addCase(todoUpdateAsync.fulfilled, (state, action) => {
            state.todoList = state.todoList.map(todo => 
                todo._id === action.payload._id ? {...todo, done: !todo.done} : todo    
            )
        })
        .addCase(todoRemoveAsync.fulfilled, (state, action) => {
            state.todoList = state.todoList.filter(todo => 
                todo._id !== action.payload
            )
        })
    }
})

export const selectTodo = (state: RootState) => state.todo.todoList;
export default todoSlice.reducer;