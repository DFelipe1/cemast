export function Input({id, label, placeholder, name}) {
    return (
        <div className="w-full">
            <label htmlFor={id} className='text-sm lg:text-base font-semibold text-zinc-600 tracking-wider'>{label}:</label>
            <input type="text" name={name} id={id} className='w-full p-4 bg-zinc-200 rounded placeholder:text-sm placeholder:text-zinc-400' placeholder={placeholder} />
        </div>
    )
}