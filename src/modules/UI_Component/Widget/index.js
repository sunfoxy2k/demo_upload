import React from "react";
import WidgetStyle from './widget.module.css'

const Widget = ({ children, className}) => {
    return (
        <div className={`${WidgetStyle.container} ${className}`}>
            {children}
        </div>
    )
}

export default Widget