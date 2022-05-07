import React from 'react';
import {BrowserRouter as Router, Link, NavLink} from "react-router-dom"
import {Path} from "./Routes";
import s from './header.module.css'
import {Button} from "@mui/material";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import {useSelector} from "react-redux";
import {RootStateType} from "../bll/store";

export const Header = () => {
    // const isLoginIn = useSelector<RootStateType, boolean>(state => state.logIn.isLoginIn)
    const isLoginIn = false
    return (
        <div className={s.header}>
            {
                isLoginIn ? '' :
                    <div className={s.btn}>
                        <Link to={Path.Registration}> Sign Up </Link></div>
            }
            {
                isLoginIn ? '' :
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
                isLoginIn ? '' :
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
            {/*    !isLoginIn ? '' : <div className={s.item}> <Link to={Path.Profile}> Profile </Link> </div>*/}
            {/*}*/}
            {/*{*/}
            {/*    !isLoginIn ? '' : <div className={s.item}> <Link to={Path.NewPass}> New Password </Link> </div>*/}
            {/*}*/}
            {/*{*/}
            {/*    !isLoginIn ? '' : <div className={s.item}> <Link to={Path.ForgotPass}> Forgot Password </Link> </div>*/}
            {/*}*/}


            {/*<NavLink to={Path.LoginIn}>*/}
            {/*    Sign In*/}
            {/*</NavLink>*/}

        </div>
    )
}
