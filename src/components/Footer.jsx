import { Envelope, FacebookLogo, InstagramLogo, MapPin, Phone } from "phosphor-react";

export function Footer() {
    return (
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
                            <Phone weight='regular'className='text-orange-400 text-2xl lg:text-3xl'/>
                            <span>(21) 99999-9999</span>
                        </a>
                        <a href="" className="flex gap-1 items-center justify-start">
                            <MapPin weight='fill' className='text-orange-400 text-2xl lg:text-3xl' />
                            Contato@email.com
                        </a>
                        <a href="" className="flex gap-1 items-center justify-start">
                            <Envelope weight='fill' className='text-orange-400 text-2xl lg:text-3xl'/>
                            Contato@email.com
                        </a>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-4xl mx-auto flex gap-5 justify-between items-center mt-16 py-3">
                    <span className='text-xs font-bold lg:text-sm text-zinc-500 tracking-wide text-center'>Todos os direitos resevardos Cemast ©2023</span>

                    <div className='flex gap-4'>
                        <div>
                        <FacebookLogo weight='fill' className='text-orange-400 text-2xl lg:text-3xl'/>
                        </div>
                        <div>
                        <InstagramLogo weight='fill' className='text-orange-400 text-2xl lg:text-3xl'/>
                        </div>
                        <div>
                        <Envelope weight='regular' className='text-orange-400 text-2xl lg:text-3xl'/>
                        </div>
                    </div>
                </div>
            </div>  
        </footer>
)
}