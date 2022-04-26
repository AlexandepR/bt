import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {SignUp} from "./SignUp/SignUp";
import {SignIn} from "./SignIn/SignIn";
import {Profile} from "./Profile/Profile";
import {NewPass} from "./NewPass/newPass";
import {ForgotPass} from "./ForgotPass/ForgotPass";
import {ErrorPage} from "./ErrorPage/ErrorPage";

export enum Path {
    SignUp = '/signUp',
    SignIn = "/signIn",
    Profile = "/profile",
    NewPass = "/newPass",
    ForgotPass = "/forgotPass",
    ErrorPage = '/errorPage',
}


export const RoutesAll = () => {
    return (
        // <Router>
            <Routes>
                <Route path="/" element={''}/>
                <Route path={Path.SignUp} element={<SignUp/>}/>
                <Route path={Path.SignIn} element={<SignIn/>}/>
                <Route path={Path.Profile} element={<Profile/>}/>
                <Route path={Path.NewPass} element={<NewPass/>}/>
                <Route path={Path.ForgotPass} element={<ForgotPass/>}/>
                <Route path={Path.ErrorPage} element={<ErrorPage />}/>
                <Route path="*" element={<ErrorPage />}/>
            </Routes>
        // </Router>
    )

}
