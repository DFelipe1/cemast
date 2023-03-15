import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export function Card({ children, title, subtitle, description, course}) {

    const navigate = useNavigate()

    return (
        <a className='min-w-[230px] md:min-w-[200px] snap-center bg-white rounded py-9 px-4 flex flex-col items-center'>
            <div className='lg:w-[200px] flex place-items-center'>
                {children}
            </div>
            <div className='max-w-full flex flex-col gap-2 mt-4'>
                <span className='font-bold text-orange-500 text-xs'>{subtitle}</span>
                <strong className='font-bold text-xl lg:text-2xl leading-tight'>{title}</strong>
                <p className='text-xs lg:text-sm text-zinc-500 truncate'>
                    {description}
                </p>
                <div className='w-[60%]'>
                <Button btnAlt Click={() => navigate('courses/', { state: course })} >
                    ver mais
                </Button>
                </div>
            </div>
        </a>
    )
}