import Avatar from "@/modules/UI_Component/Avatar";
import Widget from "@/modules/UI_Component/Widget";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetUserInfoQuery } from "../api";
import ImageUploadForm from "./component/ImageUploadForm";
import { IoReload } from 'react-icons/io5'
import style from './style/app-page.module.css';


const useProfileImg = () => {
    const [imgSrc, setImgUrl] = useState();

    const { data: signUrlImg, refetch, isSuccess, isLoading, isError, error } = useGetUserInfoQuery(null, {
        pollingInterval: 3*60*1000
    })

    useEffect(() => {
        isSuccess && setImgUrl(signUrlImg);
        isError && console.error(JSON.stringify(error))
    }, [signUrlImg])

    return [imgSrc, setImgUrl, refetch]
} 

const App = () => {
    const { userName } = useSelector(state => state.auth);
    const [imgSrc, setImgUrl, refetch] = useProfileImg();

    return (
        <div >
            <Widget className={style.container}>
                <button className={style.reload} onClick={refetch}><IoReload /> </button>
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