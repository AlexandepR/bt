import React from "react";
import {initState} from "../../bll/logInReducer";
import {fetchLogErrorAC, setInitializedAC, setIsLoginAC, setProfileAC} from "./LogInActions";

export type InitStateType = typeof initState

export type LoginResponseType = {
    _id: number,
    email: string,
    name: string,
    avatar?: string,
    publicCardPacksCount: number,
    created: string,
    updated: string,
    isAdmin: boolean,
    verified: boolean,
    rememberMe: boolean,
    token: string,
    error?: string,
    access_token?: string
}

export type LoginType = {
    email: string,
    password: string,
    rememberMe: boolean
}

export interface AuthResponse {
    accessToken: string,
    refreshToken: string;
    user: IUser
}

export interface IUser {
    email: string,
    isActivated: boolean,
    id: string
}

export enum LoginActions {
    SET_IS_LOGGED_IN = 'LOGIN/SET-IS-LOGGED-IN',
    SET_IS_INITIALIZED = 'LOGIN/SET-IS-INITIALIZED',
    SET_USER_PROFILE = 'LOGIN/SET_USER_PROFILE',
    FETCH_LOG_ERROR = 'LOGIN/FETCH_LOG_ERROR',
}

export type ActionType =
    ReturnType<typeof setIsLoginAC> |
    ReturnType<typeof setInitializedAC> |
    ReturnType<typeof setProfileAC> |
    ReturnType<typeof fetchLogErrorAC>
