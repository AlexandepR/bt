import React from 'react';
import {BrowserRouter as Router, Link, NavLink} from "react-router-dom"
import {Path} from "./Routes";
import s from './header.module.css'
import {Button} from "@mui/material";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import {useSelector} from "react-redux";
import {AppRootStoreType} from "../bll/store";

export const Header = () => {
    const isLoginIn = useSelector<AppRootStoreType, boolean>(state => state.logIn.isLoginIn)
    return (
            <div className={s.header}>
                {/*{*/}
                {/*    isSignIn ? '' : <div className={s.item}> <Link to={Path.Registration}> Sign Up </Link> </div>*/}
                {/*}*/}
                {
                    isSignIn ? '' :
                        <Button
                            startIcon={<AppRegistrationIcon/>}
                            variant='contained' sx={{
                            backgroundColor: 'rgba(27,56,205,0.78)',
                            color: '#888',
                            margin: 3,
                        }}
                        >
                            <NavLink
                                className={s.btn}
                                to={Path.Registration}
                                  // style="text-decoration: none"
                            > Sign Up</NavLink> </Button>
                }
                {
                    isSignIn ? '' :
                        <Button
                            startIcon={<ArrowCircleDownIcon/>}
                            variant='contained' sx={{
                            backgroundColor: 'rgba(27,56,205,0.78)',
                            color: '#888',
                            margin: 3,
                        }}
                        >
                            <NavLink
                                className={s.btn}
                                to={Path.LoginIn}>
                                Sign In
                            </NavLink>
                        </Button>
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


                            {/*<NavLink to={Path.LoginIn}>*/}
                            {/*    Sign In*/}
                            {/*</NavLink>*/}

            </div>
    )
}
