import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function Button({children, btnAlt, Click}){


    const navigate = useNavigate()

    // if(onRegister) {
    //     setRoute('/matricular')
    // }


    return (
        <button 
            
            className={
                !btnAlt ?
                    ('font-bold text-xs lg:text-sm text-white py-2 px-4 lg:py-4 lg:px-4 rounded-md bg-orange-400 flex gap-3 items-center justify-center hover:brightness-110 transition-colors duration-500')
                :
                    ('font-bold text-xs lg:text-sm text-orange-400 py-2 px-4 lg:py-4 lg:px-4 rounded-md bg-transparent border-2 border-orange-400 hover:brightness-110 flex gap-3 items-center justify-center transition-colors duration-500')
            }
            onClick={Click}
        >
            { children }
        </button>
    )
}