import clsx from "clsx"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function Button({children, btnAlt=false, Click, isLoading}){


    const navigate = useNavigate()



    return (
        <button 
            disabled={isLoading}
            className={clsx('min-w-[72px] font-bold text-xs lg:text-sm py-2 px-4 lg:py-4 lg:px-4 rounded-md flex gap-3 items-center justify-center hover:brightness-110 transition-colors duration-500',{
                ' text-white bg-orange-400': btnAlt === false,
                'text-orange-400 bg-transparent border-2 border-orange-400': btnAlt === true,
                'disabled:opacity-60 ': isLoading
            })}
                
            onClick={Click}
        >
            {children}
        </button>
    )
}