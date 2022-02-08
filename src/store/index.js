import { configureStore, createSlice } from "@reduxjs/toolkit";

const counter = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: counter,
    reducers: {
        increment(state, action) {
            state.value += action.payload;
        },
        decrement(state) {
            state.value -= 1;
        },
    }
});

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});

const counterActions = counterSlice.actions

export { store, counterActions };

