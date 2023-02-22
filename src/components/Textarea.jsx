export function Textarea({id, label, placeholder}) {
    return (
        <div>
            <label htmlFor={id} className='text-sm lg:text-base font-semibold text-zinc-600 tracking-wider'>{label}:</label>
            <textarea 
                name="message" 
                id={id} 
                cols="30" 
                rows="5"
                placeholder={placeholder}
                className='w-full p-4 resize-none bg-zinc-200 rounded placeholder:text-sm placeholder:text-zinc-400'
            ></textarea>
        </div>
    )
}