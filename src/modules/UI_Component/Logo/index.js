import React from "react";
import Link from "next/link"
import LogoStyle from "./logo.module.css"
import ExportedImage from "next-image-export-optimizer";
import logoImage from './asset/logo.svg'

const Logo = ({className}) => {
    return (
        <ExportedImage src={logoImage} alt="logo-img" className={`${LogoStyle.logo} ${className}`} placeholder="empty" unoptimized/>
    )
}
export default Logo;

export const LogoLink = ({className, href = "/"}) => {
    return (
        <Link href={href}className={className}>
            <Logo />
        </Link>
    )
}