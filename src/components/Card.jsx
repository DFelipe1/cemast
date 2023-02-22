import { Button } from "./Button";

export function Card({ children, title, subtitle, description}) {
    return (
        <div className='w-[350px]  bg-white rounded py-9 px-4 flex flex-col items-center'>
            <div className='lg:w-[200px] flex place-items-center'>
                {children}
            </div>
            <div className=' flex flex-col gap-2 mt-4'>
                <span className='font-bold text-orange-500 text-xs'>{subtitle}</span>
                <strong className='font-bold text-xl lg:text-2xl leading-tight'>{title}</strong>
                <p className='text-xs lg:text-sm text-zinc-500 '>
                    {description}
                </p>
                <div className='w-[60%]'>
                <Button btnAlt >
                    ver mais
                </Button>
                </div>
            </div>
        </div>
    )
}