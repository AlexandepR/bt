import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import {SignUp} from "./SignUp/SignUp";
import {SignIn} from "./SignIn/SignIn";
import {Profile} from "./Profile/Profile";
import {NewPass} from "./NewPass/newPass";
import {ForgotPass} from "./ForgotPass/ForgotPass";


export const Header = () => {
    const isSignIn = true
    return (
        <Router>
                <nav>
                    {
                        isSignIn ? '' : <Link to='/signUp'> Sign Up </Link>
                    }
                    {
                        isSignIn ? '' : <Link to='/signIn'> Sign In </Link>
                    }
                    {
                        !isSignIn ? '' : <Link to='/profile'> Profile </Link>
                    }
                    {
                        !isSignIn ? '' : <Link to='/newPass'> New Password </Link>
                    }
                    {
                        !isSignIn ? '' : <Link to='/forgotPass'> Forgot Password </Link>
                    }



                </nav>
        </Router>
    )
}
