export function Button({children, btnAlt}){
    return (
        <button className={
            !btnAlt ?
                ('font-bold text-xs md:text-sm text-white py-4 px-6 rounded-md bg-orange-400 flex gap-3 items-center justify-center hover:brightness-110 transition-colors duration-500')
            :
                ('font-bold text-xs md:text-sm text-orange-400 py-4 px-6 rounded-md bg-transparent border-2 border-orange-400 hover:brightness-110 flex gap-3 items-center justify-center transition-colors duration-500')
        }>
            { children }
        </button>
    )
}