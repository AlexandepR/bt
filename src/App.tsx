import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./ui/Header";
import {Routes} from "./ui/Routes";
import s from './App.module.css';
// import { createMuiTheme } from '@material-ui/core/styles';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className={s.App}>
        hi!!!!!!!5555
       {/*hash router , provider*/}
        <Header />
        <Routes />
    </div>
  );
}

export default App;
