import { Input } from "../components/Input";
import { Section } from "../components/Section";
import { Select } from "../components/Select";
import { Textarea } from "../components/Textarea";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";

import { useRef } from "react";
import emailjs from '@emailjs/browser';

export function Registration() {

    const form = useRef();


    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLETE_REGISTER, form.current, import.meta.env.VITE_PUBLIC_KEY)
        .then((result) => {
            alert('success')
        }, (error) => {
            alert('error')
        });

        e.target.reset()
    }

    return (
        <div className="w-full text-textColor">
            <main className="w-full overflow-hidden mt-6 flex flex-col">
                <Section id='register'>
                    <form ref={form} onSubmit={e => sendEmail(e)} className="flex flex-col gap-10">
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="box" />
                        <input type="hidden" name="_next" value="https://cemast.vercel.app"/>

                        <Input
                        id="email"
                        label="Email"
                        placeholder="Digite seu email"
                        name="email"
                        />
                        <div className="w-full flex flex-col gap-7 md:flex-row">
                            <Select  
                                id={'courses'} 
                                label="Cursos" 
                                name={'Curso'} 
                                placeholder="Qual curso irá se matricular?" 
                                options={['Berçario', 'Jardim 1', 'jardim 2']}
                            />

                            <Select  
                                id={'timer'} 
                                label="Horario" 
                                name={'Horario'} 
                                placeholder="Qual o horario?" 
                                options={['Manha', 'Tarde']}
                            />
                        </div>

                         <fieldset className="">
                            <legend className="text-orange-500 font-medium">informações do aluno</legend>
                            <div className="flex flex-col gap-5 mt-6 px-3">
                                <Input  
                                    id={'student'} 
                                    label="Nome completo do(a) aluno(a)" 
                                    name={'Aluno'} 
                                    placeholder="Informe qual nome do aluno"
                                />

                                <div className="flex flex-col md:flex-row gap-5">
                                    <Input  
                                        id={'studentAge'} 
                                        label="Data de nasc." 
                                        name={'Nascimento'} 
                                        placeholder="dd/mm/aaaa"
                                    />
                                    <Select 
                                        id={'studentGender'} 
                                        label="Genero" 
                                        name={'genero'} 
                                        placeholder="gênero do aluno" 
                                        options={['masculino', 'feminino']}
                                    />
                                    <Select 
                                        id={'studentSanguine'} 
                                        label="Tipo sanguineo" 
                                        name={'sanguineo'} 
                                        placeholder="informe o tipo sanguineo" 
                                        options={['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']}
                                    />
                                    <Input  
                                        id={'studentWeight'} 
                                        label="Peso" 
                                        name={'Peso'} 
                                        placeholder="informe o peso do aluno"
                                    />
                                </div>
                                <div className="flex flex-col md:flex-row gap-5">
                                    <Input  
                                        id={'illness'} 
                                        label="Alergia" 
                                        name={'Alergia'} 
                                        placeholder="o aluno possui algum tipo de alergia?"
                                    />
                                    <Input  
                                        id={'illness2'} 
                                        label="Alergia a que" 
                                        name={'Qual_alergia'} 
                                        placeholder="se sim, a que ele tem alergia ?"
                                    />
                                    <Input  
                                        id={'treatment'} 
                                        label="Como tratar" 
                                        name={'Tratamento'} 
                                        placeholder="quais cuidados podemos tomar?"
                                    />
                                </div>
                                <Textarea  
                                    id={'info'} 
                                    label="Informações relevantes" 
                                    name={'Informaçoes_relevantes'} 
                                    placeholder="o que mais precisamos saber para cuidar melhor do aluno?"
                                />
                            </div>
                        </fieldset>
                        
                        <fieldset className="">
                            <legend className="text-orange-500 font-medium">Endereço</legend>
                            <div className="flex flex-col gap-5 mt-6 px-3">
                                <div className="flex flex-col md:flex-row gap-5">
                                    <div className="w-full md:max-w-[30%]">
                                        <Input  
                                            id={'cep'} 
                                            label="CEP" 
                                            name={'cep'}
                                            placeholder="00000-000"
                                        />
                                    </div>  

                                    <Input  
                                        id={'road'} 
                                        label="Rua" 
                                        name={'Rua'} 
                                        placeholder="Informe em qual rua você reside"
                                    />

                                    <div className="w-full md:max-w-[30%]">
                                        <Input  
                                            id={'number'} 
                                            label="número" 
                                            name={'Numero'} 
                                            placeholder="Informe o numero de sua casa"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row gap-5">
                                    <Input  
                                        id={'neighborhood'} 
                                        label="Bairro" 
                                        name={'Bairro'} 
                                        placeholder="Em qual bairro você reside?"
                                    />
                                    <Input  
                                        id={'state'} 
                                        label="Estado" 
                                        name={'Estado'} 
                                        placeholder="Em qual Estado?"
                                    />
                                    <Input  
                                        id={'complement'} 
                                        label="Complemento" 
                                        name={'Complemento'} 
                                        placeholder="complementos"
                                    />
                                </div>
                            </div>
                        </fieldset>
                        

                        <fieldset className="">
                            <legend className="text-orange-500 font-medium">Informações do responsavel</legend>
                            <div className="flex flex-col gap-5 mt-6 px-3">
                                <div className="flex flex-col md:flex-row gap-5">
                                    <Input  
                                        id={'guardian'} 
                                        label="Nome completo do Responsavel" 
                                        name={'Nome_Responsavel'} 
                                        placeholder="Informe seu nome completo"
                                    />
                                    <div className="w-full md:max-w-[30%]">
                                        <Input  
                                            id={'kindred'} 
                                            label="Grau de parentesco" 
                                            name={'Grau_parentesco'} 
                                            placeholder="Qual seu parentesco com o aluno"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row gap-5">
                                    <Input  
                                        id={'CPF'} 
                                        label="CPF" 
                                        name={'CPF'} 
                                        placeholder="Informe seu CPF"
                                    />
                                    <Input  
                                        id={'RG'} 
                                        label="RG" 
                                        name={'RG'} 
                                        placeholder="Informe seu RG"
                                    />
                                </div>
                                <div className="flex flex-col md:flex-row gap-5">
                                    <Input  
                                        id={'guardianGender'} 
                                        label="Data de nascimento" 
                                        name={'nascimento_responsavel'} 
                                        placeholder="dd/mm/aaaa"
                                    />
                                    <Input  
                                        id={'telephone'} 
                                        label="Tel./celular" 
                                        name={'telefone'} 
                                        placeholder="(00)00000-0000"
                                    />
                                </div>

                                <Input  
                                    id={'fetch'} 
                                    label="Quam vai levar e trazer" 
                                    name={'fetch'} 
                                    placeholder="Informe quem vão ser as pessoas que irão levar e trazer o aluno"
                                />
                            </div>
                        </fieldset>
                       
                        <div className='w-[50%]'>
                        <Button>
                            Enviar
                        </Button>
                        </div>

                    </form>

                </Section>
            </main>
            <Footer/>
        </div>
    )
}