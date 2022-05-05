import thunk from "redux-thunk"
import {applyMiddleware, combineReducers, createStore} from "redux";
import {logInReducer} from "./logInReducer";



const rootReducer = combineReducers ({
    logIn: logInReducer
})
export type RootStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));

// export type AppRootStoreType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store