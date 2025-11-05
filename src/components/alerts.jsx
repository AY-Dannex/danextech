import React, { useState, useEffect } from 'react'

function Alerts({type, message, onClose}){
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false)
            setTimeout(() => onClose?.(), 300)
        }, 3000)

        return () => clearTimeout(timer)
    }, [onClose])

    const baseStyle = "fixed top-[-40px] left-1/2 transform -translate-x-1/2 transition-all duration-300 p-3 rounded-md text-white font-semibold text-center w-[90%] max-w-sm shadow-lg z-50"
    let style = ""

    if(type === "success") style = "bg-green-600"
    if(type === "error") style = "bg-red-600"
    if(type === "network") style = "bg-yellow-600"

    return(
        <div className={`${baseStyle} ${style} ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}>
            {message}
        </div>
    );
}
export default Alerts