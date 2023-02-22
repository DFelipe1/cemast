import { ArrowRight, List, X } from "phosphor-react";
import { useEffect, useState } from "react";
import { Button } from "./Button";

export function Header() {

    const [ toggleMenu, setToggleMenu ] = useState(false);
    const [ screen, setScreen ] = useState(false);

    useEffect(() => {
        if (window.screen.width > 640) {
            setScreen(true)
        }
    }, [])

    function toggle() {
        setToggleMenu(!toggleMenu);
    }

    return (
        <header className='w-full'>
            <div className='max-w-[85%] mx-auto py-5 flex items-center justify-between'>
                <h1 className=" font-bold text-2xl ">CEMAST</h1>
                <button 
                    className="md:hidden text-white p-2 rounded-full bg-gray-100 flex gap-3 items-center justify-center hover:brightness-110 transition-colors duration-500"
                    onClick={toggle}
                >
                    <List size={28} weight="fill" className="text-orange-400" />
                </button>

                <nav className="hidden md:flex gap-4 md:gap-6 items-center justify-center text-zinc-400 font-bold text-xs md:text-sm">
                    <a href="#home" className="hover:text-zinc-600 transition-colors duration-500">Inicio</a>
                    <a href="#about" className="hover:text-zinc-600 transition-colors duration-500">Sobre</a>
                    <a href="#courses" className="hover:text-zinc-600 transition-colors duration-500">Cursos</a>
                    <a href="#contact" className="hover:text-zinc-600 transition-colors duration-500">Contato</a>
                </nav>

                <div className="hidden md:flex" >
                    <Button>
                        Matricular-se
                        <ArrowRight size={16} weight="bold"/>
                    </Button>
                </div>
                
                {toggleMenu && (
                    <div className="absolute w-fit h-full p-8 top-0 right-0 flex flex-col gap-4 items-start justify-center bg-white z-50">
                        <button 
                            className="absolute top-20 right-6 text-white p-2 rounded-full bg-gray-100 flex gap-3 items-center justify-center hover:brightness-110 transition-colors duration-500"
                            onClick={toggle}
                        >
                            <X size={24} weight="fill" className="text-zinc-500 hover:brightness-110" />
                        </button>

                        <nav className="flex flex-col gap-6 items-center justify-start text-zinc-400 font-bold text-sm">
                            <a href="" className="hover:text-zinc-600 transition-colors duration-500">Inicio</a>
                            <a href="" className="hover:text-zinc-600 transition-colors duration-500">Sobre</a>
                            <a href="" className="hover:text-zinc-600 transition-colors duration-500">Cursos</a>
                            <a href="" className="hover:text-zinc-600 transition-colors duration-500">Contato</a>

                        </nav>

                        <Button>
                            Matricular-se
                            <ArrowRight size={16} weight="bold"/>
                        </Button>
                    </div>
                )}
            </div>
            

        </header>
    )
}