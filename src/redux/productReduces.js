import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "todos",
  initialState: {
    product: {
      name: "football",
      price: 200,
    },
  },
  reducers: {
    incrementCount: (state) => {
      console.log(state);
      state.count = state.count + 1;
    },
    decrementCount: (state) => {
      state.count = state.count - 1;
    },
    setTodoList: (state) => {
      state.todo.push({
        name: "first redux",
        description: "learning first redux",
      });
    },
  },
});

const { reducer, actions } = productSlice;

export const { incrementCount, decrementCount, setTodoList } = actions;

export default reducer;
