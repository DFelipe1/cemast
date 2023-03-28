import { useNavigate } from 'react-router-dom'
import { Backpack, Book, Student} from 'phosphor-react'
import { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import * as yup from "yup";

import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Textarea } from '../components/Textarea'
import { SectionCard, Section } from '../components/Section'
import { Card } from '../components/Card'



import Image1 from '../assets/image1.png'
import Image2 from '../assets/image2.png'


const schema = yup.object({
    name: yup.string().required("preencha o campo"),
    phone: yup.number().required('preencha o campo').max(11).min(11),
    email: yup.string().email().required('preencha o campo'),
    subject: yup.string().required('preencha o campo'),
    message: yup.string().max(500).required('preencha o campo')
});




export function Home({data}) {

    const navigate = useNavigate()
    const form = useRef();


    async function sendEmail(e) {
        e.preventDefault();
        const inputs = {
            name: form.current.name.value,
            phone: form.current.tel.value,
            email: form.current.email.value,
            subject: form.current.subject.value,
            message: form.current.message.value,
        }

        try {
            await schema.validate(inputs)
        } catch (error) {
            alert('você não preencheu os campos defidamente, revise antes de enviar')
            // e.target.reset()
            return
        }

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLETE_MESSAGE, form.current, import.meta.env.VITE_PUBLIC_KEY)
        .then((result) => {
            alert('success')
        }, (error) => {
            alert('error')
        });

        e.target.reset()
    }

    useEffect(() => {
        window.scroll(0, 0)
    },[])

    return (
        <div className="w-full text-textColor">
            {/* <Header/> */}
            <main className="w-full overflow-hidden mt-6 flex flex-col">
                <Section id='home'>
                    <div className='w-full flex flex-col items-center lg:relative md:flex-row'>
                        <div className='lg:max-w-[50%] flex flex-col gap-1 lg:gap-3 xl:absolute lg:left-0'>
                        <span className='text-sm lg:text-base font-bold text-orange-500'>{data.subtile}</span>
                        <h3 className='text-3xl lg:text-5xl  font-bold leading-tight'>{data.title}</h3>
                        <p className='text-sm lg:text-base text-zinc-500 tracking-wider'>
                            {data.prev}
                        </p>
                        <div className='flex gap-2 mt-3'>
                            <Button Click={() => navigate('/matricular')}>Matricula-se</Button>
                            <Button btnAlt>saiba mais</Button>
                        </div>
                        </div>

                        <div className='w-full lg:flex lg:justify-end'>
                        <img src={Image1} alt="menina segurando uma maça" className='object-cover'/>
                        </div>
                    </div>

                    <article className='w-full snap-mandatory snap-x flex overflow-auto gap-2 md:justify-around md:flex-row -mt-1 p-2'>
                        <SectionCard title={data.cards[0].title} description={data.cards[0].description}>
                            <Student weight="fill" size={28} />
                        </SectionCard>

                        <SectionCard title={data.cards[1].title} description={data.cards[1].description}>
                            <Backpack weight="fill" size={28}/>
                        </SectionCard>

                        <SectionCard title={data.cards[2].title} description={data.cards[2].description}>
                            <Book weight="fill" size={28}/>
                        </SectionCard>
                    </article>
                </Section>

            
                <Section id='about' bg="bg-white">
                    <div className='w-full flex flex-col md:flex-row-reverse gap-4 justify-around md:items-center'>
                        <div className='w-full'>
                            <img src={Image2} alt="menino segurando livro" className='object-cover'/>
                        </div>

                        <div className='flex flex-col gap-3 md:max-w-[50%]'>
                            <div className='w-[50px] h-[2px] bg-orange-400' />
                            <h2 className='font-bold text-2xl lg:text-4xl'>Quem somos nós?</h2>
                            <p className='text-sm lg:text-base text-zinc-500 tracking-wider text-justify'>
                               {data.about}
                            </p>

                            <strong className="font-bold text-orange-500 text-sm lg:text-base">Faça parte dessa historia.</strong>

                            {/* <div className="w-[50%] ">
                                <Button>
                                Saiba mais
                                <CaretRight size={16} />
                                </Button>
                            </div> */}
                        </div>
                    </div>
                </Section>

                <Section id="courses">
                    <div className='flex flex-col gap-3'>
                        <span className='font-bold text-orange-500 text-sm lg:text-base'>Academia de estudos</span>
                        <h3 className='font-bold text-2xl lg:text-4xl leading-tight'>Nossos cursos educacionais</h3>
                        <p className='text-sm lg:text-base text-zinc-500 tracking-wider'>
                            Aqui pensamos nos melhores formações academicas para seu filho.
                        </p>
                        </div>

                        <div className='mt-10 snap-mandatory snap-x overflow-auto flex md:flex-row gap-5 '>
                            {data.couses.map((course, i) => {
                                return (
                                    <Card
                                        key={i}
                                        title={course.title}
                                        subtitle='Academia de estudos'
                                        description={course.description}
                                        course={course}
                                    >
                                        <img src={course.image} alt="parquinho de criança" />
                                    </Card>
                                )
                            })}
                    </div>
                </Section>

                <Section id="contact" bg='bg-white'>
                    <div className='flex flex-col gap-3'>
                        <span className='font-bold text-orange-500 text-sm lg:text-base'>Marque uma visita</span>
                        <h3 className='font-bold text-2xl lg:text-4xl leading-tight'>Entre em contato conosco</h3>
                        <p className='text-sm lg:text-base text-zinc-500 tracking-wider'>
                        Agende um horario com a gente ficaremos super feliz em poder responde-lo.
                        </p>
                    </div>

                    <form ref={form} onSubmit={e => sendEmail(e)} className='mt-7 flex flex-col gap-4 md:px-11'>
                        <div className='flex flex-col md:flex-row md:justify-between gap-4'>
                            {/* <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="box" />
                            <input type="hidden" name="_next" value="https://cemast.vercel.app"/> */}
                            <Input
                                id="name"
                                label="Nome"
                                placeholder="Digite seu nome"
                                name="nome"
                                type="text"
                                
                            />
                            <Input
                                id="tel"
                                label="Telefone"
                                placeholder="Digite seu número de celular"
                                name="telefone"
                                type='tel'
                        
                            />
                        </div>
                        <Input
                            id="email"
                            label="Email"
                            placeholder="Digite seu email"
                            name="email"
                            type='email'
                            
                        />
                        <Input
                            id="subject"
                            label="assunto"
                            placeholder="Digite o assunto da mensagem"
                            name="assunto"
                            
                        />
                        
                        <Textarea
                            id="message"
                            label="mensagem"
                            placeholder="Digite sua mensagem"
                            name="mensagem"
                            
                        />

                        <div className='w-[50%]'>
                        <Button>
                            Enviar
                        </Button>
                        </div>
                        
                    </form>
                </Section>

                {/* <Footer links={data.links}/> */}
            </main>
            </div>
    )
}