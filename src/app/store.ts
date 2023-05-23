import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice";
import todoReducer from "../slice/todoSlice";
import chartReducer from "../slice/chartSlice";

// 스토어 생성
export const store = configureStore({
    // 스토어에 슬라이스 리듀서 추가
    reducer: {
        counter: counterReducer,
        todo: todoReducer,
        chart: chartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;