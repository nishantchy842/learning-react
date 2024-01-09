import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    count: 0,
    todo: [],
  },
  reducers: {
    incrementCount: (state) => {
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

//redux
// useDispatch -> alter the initialState
// useSelector -> use the value wherever you want

const { reducer, actions } = todosSlice;

export const { incrementCount, decrementCount, setTodoList } = actions;

export default reducer;
