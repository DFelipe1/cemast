export function Section({children, id, bg}) {
    return (
        <section id={id} className={`w-full py-16 ${bg}`}>
          <div className='w-full max-w-[85%] mx-auto'>
            {children}
          </div>
        </section>
    )
}

export function SectionCard({children, title, description}) {
    return (
        <>
        {
            description ? (
                <div className='snap-center min-w-[200px] lg:w-full max-w-xs p-4 bg-white flex flex-col gap-3 items-start'>
                    <div className="flex gap-1 items-center md:gap-2">
                        <div className='p-2 bg-orange-500 rounded-full w-fit text-white text-lg md:text-2xl lg:text-4xl'>
                            {children}
                        </div>
                    </div>
                    <div className='w-[50px] h-[2px] bg-orange-400' />
                    <strong className='font-bold text-sm lg:text-xl text-center'>{title}</strong>
                    <p className='text-xs text-zinc-500 lg:text-base'>{description}</p>
                </div>
            ) : (
                <div className='snap-center min-w-[200px] lg:w-full max-w-xs p-4 bg-white flex gap-3 items-center justify-center'>
                    <div className="h-full flex flex-col gap-1 items-center justify-center md:gap-3">
                        <div className='p-2 bg-orange-500 rounded-full w-fit text-white text-lg md:text-2xl lg:text-4xl'>
                            {children}
                        </div>
        
                        <div className='w-[50%] h-[2px] bg-orange-400' />
        
                        <strong className='font-bold text-sm lg:text-xl text-center'>{title}</strong>
                    </div>
                </div>
            )
        }
        
        </>
    )
}

