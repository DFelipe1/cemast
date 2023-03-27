import { Envelope, FacebookLogo, InstagramLogo, MapPin, Phone, WhatsappLogo } from "phosphor-react";

export function Footer({links}) {
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

                    <div className="">
                        <h3 className='font-bold text-lg lg:text-xl leading-tight'>Entre em contato</h3>
                        <div className='mt-3 flex flex-col gap-2 text-sm lg:text-base text-zinc-500 tracking-wide'>
                        <a href={`tel:${links.phone}`} className="flex gap-1 items-center justify-start" target='_blank'>
                            <Phone size={32} weight='regular'className='text-orange-400 text-2xl lg:text-3xl'/>
                            <span>{links.phone}</span>
                        </a>
                        <a href={`https://goo.gl/maps/QZVXRc55CZUtWfP38`} className="flex gap-1 items-center justify-start" target='_blank'>
                            <MapPin size={32} weight='fill' className='text-orange-400 text-2xl lg:text-3xl' />
                            <span className='max-w-[200px] md:max-w-xs'>{links.adress}</span>
                        </a>
                        <a href={`mailto:${links.email}`} className="flex gap-1 items-center justify-start" target='_blank'>
                            <Envelope size={32} weight='fill' className='text-orange-400 text-2xl lg:text-3xl'/>
                            {links.email}
                        </a>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-4xl mx-auto flex flex-col-reverse md:flex-row gap-5 justify-between items-center mt-16 py-3">
                    <span className='text-xs font-bold lg:text-sm text-zinc-500 tracking-wide text-center'>Todos os direitos resevardos Cemast ©2023</span>

                    <div className='flex gap-4'>
                        <a href={`https://www.facebook.com/${links.facebook}`} target='_blank'>
                            <FacebookLogo weight='fill' className='text-orange-400 text-2xl lg:text-3xl'/>
                        </a>
                        <a href={`https://www.instagram.com/${links.instagram}`} target='_blank'>
                            <InstagramLogo weight='fill' className='text-orange-400 text-2xl lg:text-3xl'/>
                        </a>
                        <a href={`https://api.whatsapp.com/send/?phone=${links.whatsapp}&text=Gostaria+de+agendar+uma+visita!&type=phone_number&app_absent=0`} target='_blank'>
                            <WhatsappLogo weight='fill' className='text-orange-400 text-2xl lg:text-3xl'/>
                        </a>
                    </div>
                </div>
            </div>  
        </footer>
)
}