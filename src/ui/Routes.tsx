import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {SignUp} from "./SignUp/SignUp";
import {SignIn} from "./SignIn/SignIn";
import {Profile} from "./Profile/Profile";
import {NewPass} from "./NewPass/newPass";
import {ForgotPass} from "./ForgotPass/ForgotPass";
import {ErrorPage} from "./ErrorPage/ErrorPage";

export enum Path {
    SignUp = '/signUp',
SignIn ="/signIn",
Profile ="/profile",
NewPass ="/newPass",
ForgotPass ="/forgotPass",
ErrorPage = 
}


export const RoutesAll = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={''} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/newPass" element={<NewPass />} />
                <Route path="/forgotPass" element={<ForgotPass />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    )

}
