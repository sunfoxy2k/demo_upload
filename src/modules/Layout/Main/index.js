import React from "react";
import MainStyle from './main.module.css'

const MainLayout = ({children, className}) => {
    return (
        <main className={`${MainStyle.container} ${className}`}>
            {children}
        </main>
    )
}

export default MainLayout