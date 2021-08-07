import React from "react";
import s from './header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <h1 className={s.title}>NASA API project</h1>
        </header>
    )
}

export default Header