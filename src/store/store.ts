import {combineReducers, configureStore} from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import columnReducer from "./columnSlice";

const rootReducer = combineReducers({
    login: loginReducer,
    column: columnReducer
})

export const store = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})

export type AppType = ReturnType<typeof rootReducer>
//@ts-ignore
window.store = store