import { ArrowLeft, Cookie, Heart, Leaf } from "phosphor-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Section, SectionCard } from "../components/Section";

import Couse from '../assets/course2.png'
import Teaching from '../assets/Teaching-amico.svg'
import { useEffect } from "react";


export function Courses() {

    const navigate = useNavigate()
    const location = useLocation()

    const course = location.state

    useEffect(() => {
        window.scroll(0, 0)
    },[])

    console.log(course)


    return (
        <div className="w-full text-textColor">
            <main className="w-full overflow-hidden mt-6 flex flex-col">
                <Section id='home'>
                    <div className='w-full flex flex-col items-center lg:relative md:flex-row'>
                        <div className='lg:max-w-[50%] flex flex-col gap-1 lg:gap-3 lg:left-0'>
                            <a 
                                className='text-sm lg:text-base font-bold text-orange-500' 
                                onClick={() => navigate(-1)}> 
                                    <ArrowLeft size={24}/> 
                            </a>

                            <h3 className='text-3xl lg:text-5xl  font-bold leading-tight'>{course.title}</h3>
                            <p className='text-sm lg:text-base text-zinc-500 tracking-wider'>
                                {course.home.prev}
                            </p>
                            <div className='flex gap-2 mt-3'>
                                <Button Click={() => navigate('/matricular')}>Matricula-se</Button>
                                <Button btnAlt>saiba mais</Button>
                            </div>
                        </div>

                        <div className='w-full lg:flex lg:justify-end'>
                            <img src={course.home.image.url} alt="pintura a lapis" className='object-cover' />
                        </div>
                    </div>

                    <article className='w-full snap-mandatory snap-x flex overflow-auto gap-2 md:justify-around md:flex-row mt-6'>
                        {course.home.cards.map((card, i) => {
                            return(
                                <SectionCard key={i} data={card} isdescription/>
                            )
                        })}
                        
                    </article>
                </Section>

                <Section id='about' bg="bg-white">
                    <div className='w-full my-16 lg:my-[100px] flex flex-col gap-4 justify-around md:flex-row md:items-center'>
                        <div className='w-full max-w-[50%]'>
                            <img src={course.about.image.url} alt="sala de aula" className='object-cover' />
                        </div>

                        <div className='flex flex-col gap-3 md:max-w-[50%]'>
                            <div className='w-[50px] h-[2px] bg-orange-400' />
                            <h2 className='font-bold text-2xl lg:text-4xl'>{course.about.title}</h2>
                            <p className='text-sm lg:text-base text-zinc-500 tracking-wider text-justify'>
                                {course.about.description}
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3 max-w-4xl mx-auto mb-6'>
                        <div className='w-[50px] h-[2px] bg-orange-400' />
                            <h2 className='font-bold text-2xl lg:text-4xl'>Objetivos</h2>
                            <div className='flex flex-col gap-2'>
                                { 
                                    course.description.text.split('\\n').map(objetive => {
                                    return (
                                        <p className='text-sm lg:text-base text-zinc-500 tracking-wider text-justify'>
                                            {objetive.split('<p/>')}
                                        </p>
                                    )
            
                                })}

                                {/* <p className='text-sm lg:text-base text-zinc-500 tracking-wider text-justify'>
                                    {course.description.html}
                                </p> */}
                                
                            </div>
                        </div>
                </Section>
            </main>

        </div>
    )
} 