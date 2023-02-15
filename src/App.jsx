import { Header } from './components/Header'

import './styles/global.css'
import Image1 from './assets/image1.png'
import Image2 from './assets/image2.png'
import { Button } from './components/Button'
import { Backpack, Book, CaretRight, Student } from 'phosphor-react'

function App() {
  
  return (
    <div className="w-screen max-w-[85%] mx-auto text-textColor">
      <Header/>
      <main className="w-full mt-6 flex flex-col gap-10">
        <section className='w-full'>
          <div className='w-full flex flex-col-reverse items-center lg:relative md:flex-row'>
            <div className='lg:max-w-[50%] flex flex-col gap-1 lg:gap-3 lg:absolute lg:left-0'>
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
        </section>

       

        <section className='w-full flex flex-col md:flex-row-reverse gap-4 justify-around items-center'>
          <div className='w-full'>
            <img src={Image2} alt="menino segurando livro" className='object-cover'/>
          </div>

          <div className='flex flex-col gap-3 max-w-[50%]'>
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

        </section>

        <section>

        </section>

      </main>
    </div>
  )
}

export default App
