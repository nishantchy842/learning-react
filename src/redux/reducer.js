import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    count: 0,
    todo: [],
    playerDetails: {
      name: "Messi",
      address: "Argentina",
    },
    box: {
      backgroundColor: "red",
      height: "200px",
      width: "200px",
      border: "1px solid black",
    },
  },
  reducers: {
    incrementCount: (state, payload) => {
      console.log(payload, "payload");
      state.count = state.count + payload.payload;
    },
    decrementCount: (state, payload) => {
      state.count = state.count - 1;
    },
    setTodoList: (state, payload) => {
      console.log(payload, "check payload");
      // state.todo = [...payload.payload];
    },
    getAlltodo: (state, payload) => {
      state.todo = [...state.todo, payload.payload];
    },
    setBackgroundColor: (state, payload) => {
      state.box.backgroundColor = payload.payload;
    },
  },
});

const { reducer, actions } = todosSlice;

export const {
  incrementCount,
  decrementCount,
  setTodoList,
  getAlltodo,
  setBackgroundColor,
} = actions;

export default reducer;
