import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type CounterStatus = "active" | "inactive" | "pending";
type CounterType = {
  count: number;
  status: CounterStatus;
};

const initialState: CounterType = {
  count: 0,
  status: "pending",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count != 0) {
        state.count -= 1;
      }
    },
    reset: (state) => {
      state.count = 0;
    },
    setStatus: (state, action: PayloadAction<CounterStatus>) => {
      state.status = action.payload;
    },
  },
});

export const { increment, decrement, reset, setStatus } = counterSlice.actions;
export default counterSlice.reducer;
