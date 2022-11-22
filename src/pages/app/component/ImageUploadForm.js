import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Storage } from "aws-amplify";
import { usePutUserInfoMutation } from "@/api/index";
import AWSConfig from '@/aws-exports';

const { aws_user_files_s3_bucket, aws_user_files_s3_bucket_region } = AWSConfig

const ImageUploadForm = ({ setImgUrl, imgSrc }) => {
    const [previewImg, setPreview] = useState(null);
    const [preImgUrl, setpreImgUrl] = useState('');
    useEffect(() => {
        if (previewImg) {

            // revoke Object to prevent data leak
            if (preImgUrl) {
                URL.revokeObjectURL(previewImg)
            }

            const objectUrl = URL.createObjectURL(previewImg);

            setImgUrl(objectUrl)
            setpreImgUrl(objectUrl) // store to URL remove to prevent leak data

            return () => URL.revokeObjectURL(preImgUrl);
        }

    }, [previewImg])


    return (
        <div className='flex-column'>
            <FileInput setImg={setPreview} />
            <UploadImageBtn imgData={previewImg} currentProfileImageKey={imgSrc} />
        </div>
    )
}

export default ImageUploadForm

const UploadImageBtn = ({ imgData, currentProfileImageKey }) => {
    const [uploadUserProfile, _] = usePutUserInfoMutation()
    const userName = useSelector(state => state.auth.userName);
    const [isLoading, setLoad] = useState(false);

    function onSubmit(e) {
        const imgKey = `${userName}_${Date.now()}.jpeg`;
        

        if (imgData) {
            setLoad(true);
            Storage.put(imgKey, imgData,)
                .then(_ => uploadUserProfile({
                    profileImageUrl: imgKey
                }))
                .then(_ => currentProfileImageKey && Storage.remove(currentProfileImageKey))
                .then(_ => console.log(currentProfileImageKey))
                .then(_ => setLoad(false))
                .catch(e => {
                    alert('Upload ERROR')
                    console.error(e)
                }
                );
        } else {
            alert("Please Add Image before Upload")
        }

    }

    return (
        <button onClick={onSubmit} disabled={isLoading} > {isLoading ? 'Loading...': 'Upload Progile Image' }</button>
    )
}

const FileInput = ({ setImg }) => {
    function uploadLocalFile(e) {
        if (e.target.files && e.target.files.length > 0) {
            setImg(e.target.files[0]);
        }
    }

    return (
        <input type="file" id="profile-input" onChange={uploadLocalFile} />
    )
}