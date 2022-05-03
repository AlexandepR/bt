import {Dispatch} from 'redux';


export const setIsLoginAC = (value: boolean) =>
    ({type: 'APP/SET-LOGIN-IN', value} as const)