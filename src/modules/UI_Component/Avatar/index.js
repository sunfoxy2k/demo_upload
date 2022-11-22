import Link from "next/link";
import React from "react";
import AvatarStyle from './avatar.module.css';

export const AvatarLink = ({ src, className, href = '/profile' }) => {

    return (
        <Link href={href} className={className}>
            <Avatar  src={src} />
        </Link>
    )
}

const DEFAULT_IMG = '/images/avatar.webp'

const Avatar = ({ src, className }) => {
    src = src || DEFAULT_IMG

    function handleDefaultImg(e) {
        e.target.src = DEFAULT_IMG
    }

    return (
        <img src={src} alt="user_profile" className={`${className} ${AvatarStyle.img}`} onError={handleDefaultImg}/>
    )
}

export default Avatar;
