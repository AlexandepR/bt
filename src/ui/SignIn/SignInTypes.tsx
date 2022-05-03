import React from "react";
import {initState} from "../../bll/signInReducer";

export type InitStateType = typeof initState

export type LoginResponseType = {
    _id: number
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number
    created: string
    updated: string
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    token: string
    error?: string
    access_token?: string
}

export type LoginType = {
    email: string,
    password: string,
    rememberMe: boolean
}

