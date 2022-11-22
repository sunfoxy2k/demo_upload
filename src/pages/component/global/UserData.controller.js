

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { setProfileImgUrl } from "@/store/auth.reducer";
import { useGetUserInfoQuery } from "@/api/index";
import { Storage } from "aws-amplify";

const UserDataController = () => {
    const isLogin = useSelector(state => state.auth.isLogin);
    const dispatch = useDispatch()

    const {
        data,
        isSuccess,
        isError,
        isLoading,
        error,
        refetch
    } = useGetUserInfoQuery(null,{
      skip: !!!isLogin   
    })
    
    useEffect(() => {

        if (isSuccess && isLogin) {
            console.log(data)
            const { profileImageUrl } = data;
            Storage.get(profileImageUrl).then(signedImgUrl => dispatch(setProfileImgUrl(signedImgUrl)));
        }
    
        if (isError) {
            console.error(error)
        }
    
    }, [isLoading, isLogin])


    useEffect(() => {
        if (isLogin) {
            refetch()
        }
    }, [isLogin])
}

export default UserDataController;