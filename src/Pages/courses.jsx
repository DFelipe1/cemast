import { ArrowLeft, Cookie, Heart, Leaf } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Section, SectionCard } from "../components/Section";

import Couse from '../assets/course2.png'
import Teaching from '../assets/Teaching-amico.svg'


export function Courses() {

    const navigate = useNavigate()

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

                            <h3 className='text-3xl lg:text-5xl  font-bold leading-tight'>Educação infantil</h3>
                            <p className='text-sm lg:text-base text-zinc-500 tracking-wider'>
                                Nossa proposta pedagógica é formulada considerando a criança como
                                 um ser em contrução, mas que já possui inúmeros conhecimentos e 
                                 estes devem ser ampliados e articulados a uma realidade concreta. 
                                 Neste sentido, devem ser trabalhados temas que envolvam e auxiliem:
                            </p>
                            <div className='flex gap-2 mt-3'>
                                <Button Click={() => navigate('/matricular')}>Matricula-se</Button>
                                <Button btnAlt>saiba mais</Button>
                            </div>
                        </div>

                        <div className='w-full lg:flex lg:justify-end'>
                            <img src={Couse} alt="pintura a lapis" className='object-cover' />
                        </div>
                    </div>

                    <article className='w-full snap-mandatory snap-x flex overflow-auto gap-2 md:justify-around md:flex-row mt-6'>
                        <SectionCard title='Gestão de emoções'>
                            <Heart weight="regular" size={24}/>
                        </SectionCard>

                        <SectionCard title='Hábitos higiênicos'>
                            <Cookie weight="fill" size={24}/>
                        </SectionCard>

                        <SectionCard title='Preservação da natureza'>
                            <Leaf weight="regular" size={24}/>
                        </SectionCard>
                    </article>
                </Section>

                <Section id='about' bg="bg-white">
                    <div className='w-full my-16 lg:my-[100px] flex flex-col gap-4 justify-around md:flex-row md:items-center'>
                        <div className='w-full max-w-[50%]'>
                            <img src={Teaching} alt="sala de aula" className='object-cover' />
                        </div>

                        <div className='flex flex-col gap-3 md:max-w-[50%]'>
                            <div className='w-[50px] h-[2px] bg-orange-400' />
                            <h2 className='font-bold text-2xl lg:text-4xl'>Como trabalhamos</h2>
                            <p className='text-sm lg:text-base text-zinc-500 tracking-wider text-justify'>
                                Deve-se entender que, para as crianças de 0 (zero) a 5 (cinco) anos, independentemente
                                das diferentes condições no espaço escolar, as relações sociais requerem a atenção intensiva
                                dos profissionais da educação, durante o tempo e o momento de desenvolvimento das atividades
                                que lhes são peculiares: este é o tempo em que a curiosidade deve ser estimulada, a partir 
                                da brincadeira orientada pelos profissionais da educação.
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3 max-w-4xl mx-auto mb-6'>
                        <div className='w-[50px] h-[2px] bg-orange-400' />
                            <h2 className='font-bold text-2xl lg:text-4xl'>Objetivos</h2>
                            <p className='text-sm lg:text-base text-zinc-500 tracking-wider text-justify'>
                                A Educação Infantil, cuja finalidade primordial é o desenvolvimento integral da 
                                criança até cinco anos de idade, nos aspectos físico, psicológico, intelectual e 
                                social, complementando a ação da família e da comunidade, tem como objetivos:

                                <br/>
                                <br/>
                                <span className="flex flex-col gap-3 ">
                                    <p>
                                        a) Estabelecer vínculos afetivos, ampliando suas possibilidades de comunicação e interação social;
                                    </p>
                                    <p>
                                        b) Respeitar a diversidade e desenvolver atitudes de ajuda e colaboração;
                                    </p>
                                    <p>
                                        c) Incentivar a autonomia nas atividades cotidianas, assim como nas descobertas e aprendizagens;
                                    </p>
                                    <p>
                                        d) Observar e explorar o ambiente com atitude de curiosidade;
                                    </p>
                                    <p>
                                        e) Desenvolver suas expressões e habilidades de diferentes formas, estimulando suas áreas emocional, física, intelectual, e social;
                                    </p>
                                    <p>
                                        f) Brincar, expressando emoções, sentimentos, pensamentos, desejos e necessidades;
                                    </p>
                                    <p>
                                        g) Utilizar as diferentes linguagens de forma a compreender e ser compreendido, expressar suas idéias, sentimentos, necessidades e desejos;
                                    </p>
                                    <p>
                                        h) Conhecer algumas manifestações culturais, de interesse, respeito e participação, valorizando a diversidade.
                                    </p>
                                   
                                </span>
                                <br/>
                                Visamos formar cidadãos ativos, críticos e conscientes sobre si e sobre a realidade que os cerca, 
                                além de incentivar o desenvolvimento humano em sentido pleno. A aplicabilidade desta proposta se faz 
                                extremamente necessária desde as mais iniciais fases da educação e deve ser mantida até as fases finais, 
                                criando um conjunto coerente e focado num único objetivo: formação de seres humanos que transformem o mundo.
                            </p>
                        </div>
                </Section>
            </main>

            <Footer/>
        </div>
    )
} 