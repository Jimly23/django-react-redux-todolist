import { configureStore } from "@reduxjs/toolkit";
import todolistReducer from "./reducers/todolistReducer";

export default configureStore({
    reducer: {
        todolist: todolistReducer,
    },
});