import { forwardRef } from 'react'

export const Input = forwardRef(({id, label, name, ...props}, ref) => {
    return (
        <div className="w-full">
            <label htmlFor={id} className='text-sm lg:text-base font-semibold text-zinc-600 tracking-wider'>{label}:</label>
            <input  name={name} id={id} className='w-full p-4 bg-zinc-200 rounded placeholder:text-sm placeholder:text-zinc-400' {...props} ref={ref}/>
        </div>
    )
})