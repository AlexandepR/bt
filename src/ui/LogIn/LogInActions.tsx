import {Dispatch} from 'redux';
import {LoginResponseType} from "./LogInTypes";


export const setIsLoginAC = (value: boolean) =>
    ({type: 'APP/SET-LOGIN-IN', value} as const)
export const setInitializedAC = (isInitialized: boolean) =>
    ({type: 'APP/SET-INITIALIZED', isInitialized} as const)
export const setProfileAC = (profile: LoginResponseType) =>
    ({type: 'LOGIN/SET-USER-PROFILE', profile} as const)
export const fetchLogErrorAC = (error: string) =>
    ({type: 'LOGIN/FETCH-LOG-ERROR',error} as const)