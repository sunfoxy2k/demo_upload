import React, {useEffect, useRef, useState} from "react";
import FooterStyle from "./footer.module.css"
import {LogoLink} from '@/modules/UI_Component/Logo'
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
// import GridDotSVG from '../asset/dots.svg'

const FooterLayout = ({className}) => {
    const ref = useRef()
    const [height, set_height] = useState()

    useEffect(() => {
        set_height(ref.current.offsetHeight)
    }, [])

    return (
        <div className={`${FooterStyle.container} ${className}`}>
            <div className={FooterStyle.offset} style={{'height' : height}}/>
            <div className={FooterStyle.menu} ref={ref}>
                <LogoLink />
                <Menu/>
            </div>
        </div>
    )
}

// const Footer
const Menu = () => {
    return (
        <div>
            {/* <ExportedImage src={GridDotSVG}/>  */}
        </div>
    )
}

const PostUploadBtn = () => {
    return (
        <div>

        </div>
    )
}

export default FooterLayout;