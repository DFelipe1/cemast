import { Header } from './components/Header'

import './styles/global.css'
import Image1 from './assets/image1.png'
import Image2 from './assets/image2.png'
import Playdround from './assets/playground.png'
import Numbers from './assets/numbers.png'
import BookImage from './assets/book.png'
import LogicalThinking from './assets/logical-thinking.png'
import { Button } from './components/Button'
import { Backpack, Book, CaretRight, Student, FacebookLogo, Phone, Envelope, MapPin, InstagramLogo } from 'phosphor-react'
import { Input } from './components/Input'
import { Textarea } from './components/Textarea'

function App() {
  
  return (
    <div className="w-full text-textColor">
      <Header/>
      <main className="w-full overflow-hidden mt-6 flex flex-col">
        <section className='w-full py-3'>
          <div className='w-full max-w-[85%] mx-auto'>
            <div className='w-full flex flex-col items-center lg:relative md:flex-row'>
              <div className='lg:max-w-[50%] flex flex-col gap-1 lg:gap-3 xl:absolute lg:left-0'>
                <span className='text-sm lg:text-base font-bold text-orange-500'>Junte-se a nós</span>
                <h3 className='text-3xl lg:text-5xl  font-bold leading-tight'>+ de 100 alunos em confiam  nós</h3>
                <p className='text-sm lg:text-base text-zinc-500 tracking-wider'>
                  Cada dia traz consigo um novo conjunto de possibilidades de aprendizado.
                </p>
                <div className='flex gap-2 mt-3'>
                  <Button>Matricula-se</Button>
                  <Button btnAlt>saiba mais</Button>
                </div>
              </div>

              <div className='w-full lg:flex lg:justify-end'>
                <img src={Image1} alt="menina segurando uma maça" className='object-cover'/>
              </div>
            </div>

            <article className='w-full flex flex-col gap-2 md:flex-row -mt-1'>
              <div className='w-full p-4 bg-white flex flex-col gap-3 items-start'>
                <div className="flex gap-1 items-center md:gap-2">
                    <div className='p-2 bg-orange-500 rounded-full w-fit text-white text-lg md:text-2xl lg:text-4xl'>
                        <Student weight="fill" />
                    </div>
                    <strong className='font-bold text-sm lg:text-xl'>Formação academica</strong>
                </div>
                <div className='w-[50px] h-[2px] bg-orange-400' />
                <p className='text-xs text-zinc-500 lg:text-base'>...</p>
              </div>

              <div className='w-full p-4 bg-white flex flex-col gap-3 items-start'>
                <div className="flex gap-1 items-center">
                    <div className='p-2 bg-orange-500 rounded-full w-fit text-white text-lg md:text-2xl lg:text-4xl'>
                        <Backpack weight="fill" />
                    </div>
                    <strong className='font-bold text-sm lg:text-xl'>Cursos extra curriculares</strong>
                </div>
                <div className='w-[50px] h-[2px] bg-orange-400' />
                <p className='text-xs text-zinc-500 lg:text-base'>...</p>
              </div>

              <div className='w-full p-4 bg-white flex flex-col gap-3 items-start'>
                <div className="flex gap-1 items-center">
                    <div className='p-2 bg-orange-500 rounded-full w-fit text-white text-lg md:text-2xl lg:text-4xl'>
                        <Book weight="fill" />
                    </div>
                    <strong className='font-bold text-sm lg:text-xl'>Pedagogia</strong>
                </div>
                <div className='w-[50px] h-[2px] bg-orange-400' />
                <p className='text-xs text-zinc-500 lg:text-base'>...</p>
              </div>

            </article>
          </div>
          
        </section>

       

        <section id='about' className='w-full bg-white py-14 lg:py-[100px]'>
          <div className='w-full max-w-[85%] mx-auto flex flex-col md:flex-row-reverse gap-4 justify-around md:items-center'>
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

                <div className="w-[50%] ">
                  <Button>
                    Saiba mais
                    <CaretRight size={16} />
                  </Button>
                </div>
            </div>
          </div>
        </section>

        <section id="courses" className='w-full py-14 lg:py-[100px]'>
          <div className='w-full max-w-[85%] mx-auto'>
            <div className='flex flex-col gap-3'>
              <span className='font-bold text-orange-500 text-sm lg:text-base'>Academia de estudos</span>
              <h3 className='font-bold text-2xl lg:text-4xl leading-tight'>Nossos cursos educacionais</h3>
              <p className='text-sm lg:text-base text-zinc-500 tracking-wider'>
                Aqui pensamos nos melhores formações academicas para seu filho.
              </p>
            </div>

            <div className='mt-10 flex flex-col md:flex-row gap-5 items-center justify-evenly'>
              <div className='w-[350px]  bg-white rounded py-9 px-4 flex flex-col items-center'>
                <div className='lg:w-[200px] flex place-items-center'>
                  <img src={Playdround} alt="parquinho de criança" />
                </div>
                <div className=' flex flex-col gap-2 mt-4'>
                  <span className='font-bold text-orange-500 text-xs'>Academia de estudos</span>
                  <strong className='font-bold text-xl lg:text-2xl leading-tight'>Berçario</strong>
                  <p className='text-xs lg:text-sm text-zinc-500 '>
                    Aqui pensamos nos melhores formações academicas para seu filho.
                  </p>
                  <div className='w-[60%]'>
                    <Button btnAlt >
                      ver mais
                    </Button>
                  </div>
                </div>
              </div>

              <div className='w-[350px] bg-white rounded py-9 px-4 flex flex-col items-center'>
                <div className='lg:w-[200px] flex place-items-center'>
                  <img src={Numbers} alt="parquinho de criança" />
                </div>
                <div className='flex flex-col gap-2 mt-4'>
                  <span className='font-bold text-orange-500 text-xs'>Academia de estudos</span>
                  <strong className='font-bold text-xl lg:text-2xl leading-tight'>Jardim 1</strong>
                  <p className='text-xs lg:text-sm text-zinc-500 '>
                    Aqui pensamos nos melhores formações academicas para seu filho.
                  </p>
                  <div className='w-[60%]'>
                    <Button btnAlt >
                      ver mais
                    </Button>
                  </div>
                </div>
              </div>

              <div className='w-[350px] bg-white rounded py-9 px-4 flex flex-col items-center'>
                <div className='lg:w-[200px] flex place-items-center'>
                  <img src={LogicalThinking} alt="parquinho de criança" />
                </div>
                <div className=' flex flex-col gap-2 mt-4'>
                  <span className='font-bold text-orange-500 text-xs'>Academia de estudos</span>
                  <strong className='font-bold text-xl lg:text-2xl leading-tight'>Jardim 2</strong>
                  <p className='text-xs lg:text-sm text-zinc-500 '>
                    Aqui pensamos nos melhores formações academicas para seu filho.
                  </p>
                  <div className='w-[60%]'>
                    <Button btnAlt >
                      ver mais
                    </Button>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          
        </section>

        <section id="contact" className="w-full py-14 lg:py-[100px] bg-white">
          <div className='w-full max-w-[85%] mx-auto'>
            <div className='flex flex-col gap-3'>
              <span className='font-bold text-orange-500 text-sm lg:text-base'>Marque uma visita</span>
              <h3 className='font-bold text-2xl lg:text-4xl leading-tight'>Entre em contato conosco</h3>
              <p className='text-sm lg:text-base text-zinc-500 tracking-wider'>
              Agende um horario com a gente ficaremos super feliz em poder responde-lo.
              </p>
            </div>

            <form className='mt-7 flex flex-col gap-4 md:px-11' action="">
              <div className='flex flex-col md:flex-row md:justify-between gap-4'>
                <Input
                  id="name"
                  label="Nome"
                  placeholder="Digite seu nome"
                />
                <Input
                  id="tel"
                  label="Telefone"
                  placeholder="Digite seu número de celular"
                />
              </div>
              <Input
                id="email"
                label="Email"
                placeholder="Digite seu email"
              />
              <Input
                id="subject"
                label="assunto"
                placeholder="Digite o assunto da mensagem"
              />
              
              <Textarea
                id="message"
                label="mensagem"
                placeholder="Digite sua mensagem"
              />

              <div className='w-[50%]'>
                <Button>
                  Enviar
                </Button>
              </div>
              
            </form>


          </div>
        </section>


        <footer className="w-full pt-14 lg:pt-[100px]">
          <div className='w-full max-w-[85%] mx-auto'>
            <div className='w-full flex flex-col md:flex-row md:justify-between gap-5'>
              <div>
                <h3 className='font-bold text-lg lg:text-xl leading-tight'>Informações da Escola</h3>
                <div className='mt-3 flex flex-col text-sm lg:text-base text-zinc-500 tracking-wide'>
                  <a href="#about">Sobre</a>
                  <a href="#courses">Cursos</a>
                </div>
              </div>

              <div>
                <h3 className='font-bold text-lg lg:text-xl leading-tight'>Entre em contato</h3>
                <div className='mt-3 flex flex-col gap-2 text-sm lg:text-base text-zinc-500 tracking-wide'>
                  <a href="" className="flex gap-1 items-center justify-start">
                    <Phone size={18} weight='regular'className='text-orange-400'/>
                    <span>(21) 99999-9999</span>
                  </a>
                  <a href="" className="flex gap-1 items-center justify-start">
                    <MapPin size={18} weight='fill' className='text-orange-400' />
                    Contato@email.com
                  </a>
                  <a href="" className="flex gap-1 items-center justify-start">
                    <Envelope size={18} weight='fill' className='text-orange-400'/>
                    Contato@email.com
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full max-w-4xl mx-auto flex gap-2 justify-between mt-16">
              <span className='text-xs font-bold lg:text-sm text-zinc-500 tracking-wide'>Todos os direitos resevardos Cemast ©2023</span>

              <div className='flex gap-4'>
                <div>
                  <FacebookLogo size={24} weight='fill' className='text-orange-400'/>
                </div>
                <div>
                  <InstagramLogo size={24} weight='fill' className='text-orange-400'/>
                </div>
                <div>
                <Envelope size={24} weight='regular' className='text-orange-400'/>
                </div>
              </div>
            </div>
          </div>
          
        </footer>
      </main>
    </div>
  )
}

export default App
