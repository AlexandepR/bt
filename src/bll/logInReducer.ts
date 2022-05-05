import {ActionType, InitStateType, LoginResponseType} from "../ui/LogIn/LogInTypes";

export const initState = {
    isLoginIn: false,
    isInitialized: false,
    profile: {} as LoginResponseType,
    error: '',
}

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