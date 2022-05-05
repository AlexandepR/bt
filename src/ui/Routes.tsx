import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Registration} from "./Registration/Registration";
import {LoginIn} from "./LogIn/LoginIn";
import {Profile} from "./Profile/Profile";
import {NewPass} from "./NewPass/newPass";
import {ForgotPass} from "./ForgotPass/ForgotPass";
import {ErrorPage} from "./ErrorPage/ErrorPage";

export enum Path {
    Registration = '/Registration',
    LoginIn = "/loginIn",
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
                <Route path={Path.Registration} element={<Registration />}/>
                <Route path={Path.LoginIn} element={<LoginIn />}/>
                <Route path={Path.Profile} element={<Profile />}/>
                <Route path={Path.NewPass} element={<NewPass />}/>
                <Route path={Path.ForgotPass} element={<ForgotPass />}/>
                <Route path={Path.ErrorPage} element={<ErrorPage />}/>
                <Route path="*" element={<ErrorPage />}/>
            </Routes>
        // </Router>
    )

}
