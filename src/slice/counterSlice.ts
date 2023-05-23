import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface CounterState {
    count: number;
}

const initialState: CounterState = {
    count: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increase: (state) => {
            state.count += 1
        },
        decrease: (state) => {
            state.count -= 1;
        },
        increaseByAmount: (state, action: PayloadAction<number>) => {
            state.count += action.payload;
        }
    }
})

export const { increase, decrease, increaseByAmount } = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.count;
export default counterSlice.reducer;