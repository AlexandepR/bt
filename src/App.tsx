import React from 'react';
import './App.css';
import {Header} from "./ui/Header";
import {RoutesAll} from "./ui/Routes";
import s from './App.module.css';
import {BrowserRouter} from "react-router-dom";

// import { createMuiTheme } from '@material-ui/core/styles';

function App() {
    return (
        <div className={s.App}>
            {/*hash router , provider*/}
            <Header />
            <RoutesAll />
        </div>
    );
}

export default App;
