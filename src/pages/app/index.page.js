import Avatar from "@/modules/UI_Component/Avatar";
import Widget from "@/modules/UI_Component/Widget";
import { useState } from "react";
import { useSelector } from "react-redux";
import ImageUploadForm from "./component/ImageUploadForm";

import style from './style/app-page.module.css';

const App = () => {
    const {userName, profileImgUrl} = useSelector(state => state.auth);
    const [imgSrc, setImgUrl] = useState(profileImgUrl);

    return (
        <div >
            <Widget className={style.container}>
                <h1>{userName}</h1>

                <figure>
                    <Avatar src={imgSrc} className={style.profileImg} />
                </figure>

                <ImageUploadForm setImgUrl={setImgUrl} imgSrc={imgSrc} />
            </Widget>
        </div>
    )
};


export default App;