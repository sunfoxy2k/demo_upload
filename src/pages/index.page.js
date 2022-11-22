import React from "react";
import style from './style/index-page.module.css'

const IndexPage = () => {
    return (
        <div className={style.container}>
            <h1>This is A DEMO Application for Sunny Arona</h1>

            <p>The Work is a simple application for user to login and change their profile Image</p>

            <p>I have finished</p>

            <strong>The code design is overengineer to show full capability, I do some engineering trade-off for some assumptions</strong>
            <ul>
                <li>Allow user to login using email</li>
                <li>Allow user to change their profile image and delete not used one</li>
                <li>The image URL is not host in Public Bucket but a private one, Therefore only application user can see profile image </li>
            </ul>
        </div>
    )
}

export default IndexPage;