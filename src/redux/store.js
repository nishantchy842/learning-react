import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./reducer";

export const store = configureStore({
  reducer: todosSlice,
});
