import thunk from "redux-thunk"
import {applyMiddleware, combineReducers, createStore} from "redux";

export type RootStateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers ({
    signIn: signInReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStoreType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store