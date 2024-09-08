// import { configureStore } from "@reduxjs/toolkit";
// import { todoSlice } from "../features/todo/todoSlice";
// // import todoReducer from '../features/Todo/todoSlice'

// export const store = configureStore({
//     reducer: todoSlice,
// });

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"; // Import the reducer from your slice

export const store = configureStore({
    reducer: {
        todos: todoReducer, // Use the key "todos" to match the state structure
    },
});



// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from '../features/Todo/todoSlice';

// export const store = configureStore({
//     reducer: {
//         todo: todoReducer, // Key should match the slice name
//     },
// });
