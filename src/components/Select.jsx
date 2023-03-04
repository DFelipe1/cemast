export function Select({id, label, placeholder, name, options}) {
    return (
        <div className="w-full">
            <label htmlFor={id} className='text-sm lg:text-base font-semibold text-zinc-600 tracking-wider'>{label}:</label>
            <select type="text" name={name} id={id} className='w-full p-4 bg-zinc-200 rounded placeholder:text-sm placeholder:text-zinc-400' >
                <option disabled selected>{placeholder}</option>
                {options.map(op => (
                    <option value={op}>{op}</option>
                ))}
            </select>
        </div>
    )
}