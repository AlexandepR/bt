import React from 'react'
import style from './Logout.module.css'
import {ActionType, InitStateType} from "../LogIn/LogInTypes";
import {initState} from "../../bll/logInReducer";

const Logout = () => {
    return (
        <div>
            <h1>Welcome
            <span className={style.userName}> Alex </span>
            </h1>
            <button className={style.logoutBtn}>Logout</button>
        </div>
    )
}

export default Logout

export const logInReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case 'APP/SET-LOGIN-IN' :
            return {...state, isLoginIn: action.isLoggedIn}
        case 'APP/SET-INITIALIZED':
            return {...state, isInitialized: action.isInitialized}
        case 'LOGIN/SET-USER-PROFILE':
            return {...state, profile: action.profile}
        case 'LOGIN/FETCH-LOG-ERROR':
            return {...state, error: action.error}
        default:
            return state;
    }
}