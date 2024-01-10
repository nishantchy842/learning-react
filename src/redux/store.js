import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./reducer";
import productSlice from "./productReduces";
// import todosSlice2 from "./reducer";

export const store = configureStore({
  reducer: { todo: todosSlice, product: productSlice },
});
