import { Header } from '../components/Header'

import Image1 from '../assets/image1.png'
import Image2 from '../assets/image2.png'
import Playdround from '../assets/playground.png'
import Numbers from '../assets/numbers.png'
import BookImage from '../assets/book.png'
import LogicalThinking from '../assets/logical-thinking.png'
import { Button } from '../components/Button'
import { Backpack, Book, CaretRight, Student} from 'phosphor-react'
import { Input } from '../components/Input'
import { Textarea } from '../components/Textarea'
import { SectionCard, Section } from '../components/Section'
import { Card } from '../components/Card'
import { Footer } from '../components/Footer'
import { useNavigate } from 'react-router-dom'


export function Home() {

    const navigate = useNavigate()

    return (
        <div className="w-full text-textColor">
            {/* <Header/> */}
            <main className="w-full overflow-hidden mt-6 flex flex-col">
                <Section id='home'>
                    <div className='w-full flex flex-col items-center lg:relative md:flex-row'>
                        <div className='lg:max-w-[50%] flex flex-col gap-1 lg:gap-3 xl:absolute lg:left-0'>
                        <span className='text-sm lg:text-base font-bold text-orange-500'>Junte-se a nós</span>
                        <h3 className='text-3xl lg:text-5xl  font-bold leading-tight'>+ de 100 alunos em confiam  nós</h3>
                        <p className='text-sm lg:text-base text-zinc-500 tracking-wider'>
                            Cada dia traz consigo um novo conjunto de possibilidades de aprendizado.
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
                        <SectionCard title='Formação Academica' description='...'>
                            <Student weight="fill" size={28} />
                        </SectionCard>

                        <SectionCard title='Cursos extracurriculares' description='...'>
                            <Backpack weight="fill" size={28}/>
                        </SectionCard>

                        <SectionCard title='Pedagogia' description='...'>
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
                                O Centro Educacional Pinheiros nasceu com o comprometimento e dedicação em proporcionar uma educação de qualidade e transparência desde à Educação Infantil até o Ensino Médio.
                                <br />
                                <br />
                                Somos uma escola viva, desde 1993 desenvolvemos um trabalho de excelência. Com o compromisso de oferecer um ensino inovador alicerçado no rigor conceitual.
                                Com mais de 30 anos, acreditamos que a beleza da vida vai além de uma sala de aula.
                                <br />
                                Acreditamos que a transparência seja de vital importância no relacionamento entre responsáveis/alunos e a escola.
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
                        <Card
                            title='Berçario'
                            subtitle='Academia de estudos'
                            description='Aqui pensamos nos melhores formações academicas para seu filho.'
                        >
                            <img src={Playdround} alt="parquinho de criança" />
                        </Card>

                        <Card
                            title='Jardim 1'
                            subtitle='Academia de estudos'
                            description='Aqui pensamos nos melhores formações academicas para seu filho.'
                        >

                            <img src={Numbers} alt="parquinho de criança" />

                        </Card>

                        <Card
                            title='Jardim 2'
                            subtitle='Academia de estudos'
                            description='Aqui pensamos nos melhores formações academicas para seu filho.'
                        >

                            <img src={LogicalThinking} alt="parquinho de criança" />

                        </Card>
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

                    <form className='mt-7 flex flex-col gap-4 md:px-11' action="https://formsubmit.co/yukiyo525125@gmail.com" method="POST">
                        <div className='flex flex-col md:flex-row md:justify-between gap-4'>
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="box" />
                        <input type="hidden" name="_next" value="https://cemast.vercel.app"/>
                        <Input
                            id="name"
                            label="Nome"
                            placeholder="Digite seu nome"
                            name="nome"
                        />
                        <Input
                            id="tel"
                            label="Telefone"
                            placeholder="Digite seu número de celular"
                            name="telefone"
                        />
                        </div>
                        <Input
                        id="email"
                        label="Email"
                        placeholder="Digite seu email"
                        name="email"
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

                <Footer/>
            </main>
            </div>
    )
}