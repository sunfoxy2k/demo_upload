import Avatar from "@/modules/UI_Component/Avatar";
import Widget from "@/modules/UI_Component/Widget";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetUserInfoQuery } from "@/api/index";
import ImageUploadForm from "./component/ImageUploadForm";
import { Storage } from "aws-amplify";

import style from './style/app-page.module.css';

const App = () => {
    const userName = useSelector(state => state.auth.userName);
    const [imgSrc, setImgUrl] = useState();
    const {
        data,
        isSuccess,
        isError,
        refetch,
        error
    } = useGetUserInfoQuery(null, {
        skip: !!!userName
    })

    useEffect(() => {
        if (isSuccess) {
            const { profileImageUrl } = data;
            Storage.get(profileImageUrl).then(setImgUrl);
        }

        if (isError) {
            console.error(error())
        }

    }, [isSuccess, isError])

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