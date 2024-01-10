import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    count: 0,
    todo: ["hello"],
  },
  reducers: {
    incrementCount: (state) => {
      console.log(state.count, "state");
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
    getAlltodo: (state) => {
      state.todo.push({
        name: "first redux",
        description: "learning first redux",
      });
    },
    
  },
});



const { reducer, actions } = todosSlice;

export const { incrementCount, decrementCount, setTodoList, getAlltodo } =
  actions;

export default reducer;
