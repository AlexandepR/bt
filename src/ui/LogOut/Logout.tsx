import React from 'react'
import style from './Logout.module.css'

const Logout = () => {
    return (
        <div>
            <h1>Welcome
            <span className={style.userName}> Alex </span>
            </h1>
            <button className={style.logoutBtn}>Logout</button>
        </div>
    )
}

export default Logout