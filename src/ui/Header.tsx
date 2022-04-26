import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom"
import {Path} from "./Routes";
import s from './header.module.css'
import {Button} from "@mui/material";


export const Header = () => {
    const isSignIn = false
    return (
        <Router>
            <nav          className={s.item}>
                {/*{*/}
                {/*    isSignIn ? '' : <div className={s.item}> <Link to={Path.SignUp}> Sign Up </Link> </div>*/}
                {/*}*/}
                {
                    isSignIn ? '' :
                        <Button
                            // className={s.item}
                            type='submit'
                            color='primary'
                            variant='contained'
                            // sx={{ mt: 3, mb: 2 }}
                            // sx={{ ml: 35, pt: 2 }}
                        >
                            <Link to={Path.SignUp}> Sign Up </Link> </Button>
                }
                {
                    isSignIn ? '' :
                        <Button
                            // className={s.item}
                            type='submit'
                            color='primary'
                            variant='contained'
                        >
                            <Link to={Path.SignIn}> Sign In </Link> </Button>
                }
                {/*{*/}
                {/*    !isSignIn ? '' : <div className={s.item}> <Link to={Path.Profile}> Profile </Link> </div>*/}
                {/*}*/}
                {/*{*/}
                {/*    !isSignIn ? '' : <div className={s.item}> <Link to={Path.NewPass}> New Password </Link> </div>*/}
                {/*}*/}
                {/*{*/}
                {/*    !isSignIn ? '' : <div className={s.item}> <Link to={Path.ForgotPass}> Forgot Password </Link> </div>*/}
                {/*}*/}


            </nav>
        </Router>
    )
}
