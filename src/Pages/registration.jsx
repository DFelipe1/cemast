import { Input } from "../components/Input";
import { Section } from "../components/Section";
import { Select } from "../components/Select";
import { Textarea } from "../components/Textarea";
import { Footer } from "../components/Footer";

export function Registration() {
    return (
        <div className="w-full text-textColor">
            <main className="w-full overflow-hidden mt-6 flex flex-col">
                <Section id='register'>
                    <form action="" className="flex flex-col gap-10">
                        <div className="w-full flex flex-col gap-7 md:flex-row">
                            <Select  id={'courses'} label="Cursos" name={'course'} placeholder="Qual curso irá se matricular?" options={['Berçario', 'Jardim 1', 'jardim 2']}/>
                            <Select  id={'timer'} label="Horario" name={'timer'} placeholder="Qual o horario?" options={['Manha', 'Tarde']}/>
                        </div>

                         <fieldset className="">
                            <legend className="text-orange-500 font-medium">informações do aluno</legend>
                            <div className="flex flex-col gap-5 mt-6 px-3">
                                <Input  id={'student'} label="Nome completo do(a) aluno(a)" name={'student'} placeholder="Informe qual nome do aluno"/>
                                <div className="flex flex-col md:flex-row gap-5">
                                    <Input  id={'studentAge'} label="Data de nasc." name={'studentAge'} placeholder="dd/mm/aaaa"/>
                                    <Select  id={'studentGender'} label="Genero" name={'studentGender'} placeholder="genero do aluno" options={['masculino', 'feminino']}/>
                                    <Select  id={'studentSanguine'} label="Tipo sanguineo" name={'studentSanguine'} placeholder="informe o tipo sanguineo" options={['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']}/>
                                    <Input  id={'studentWeight'} label="Peso" name={'studentWeight'} placeholder="informe o peso do aluno"/>
                                </div>
                                <div className="flex flex-col md:flex-row gap-5">
                                    <Input  id={'illness'} label="Alergia" name={'illness'} placeholder="o aluno possui algum tipo de alergia?"/>
                                    <Input  id={'illness2'} label="Alergia a que" name={'illness2'} placeholder="se sim, a que ele tem alergia ?"/>
                                    <Input  id={'treatment'} label="Como tratar" name={'treatment'} placeholder="quais cuidados podemos tomar?"/>
                                </div>
                                <Textarea  id={'info'} label="Informações relevantes" name={'info'} placeholder="o que mais precisamos saber para cuidar melhor do aluno?"/>
                            </div>
                        </fieldset>
                        
                        <fieldset className="">
                            <legend className="text-orange-500 font-medium">Endereço</legend>
                            <div className="flex flex-col gap-5 mt-6 px-3">
                                <div className="flex flex-col md:flex-row gap-5">
                                    <div className="w-full md:max-w-[30%]">
                                        <Input  id={'cep'} label="CEP" name={'cep'} placeholder="00000-000"/>
                                    </div>  
                                    <Input  id={'road'} label="Rua" name={'road'} placeholder="Informe em qual rua você reside"/>
                                    <div className="w-full md:max-w-[30%]">
                                        <Input  id={'number'} label="número" name={'number'} placeholder="Informe o numero de sua casa"/>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row gap-5">
                                    <Input  id={'neighborhood'} label="Bairro" name={'neighborhood'} placeholder="Em qual bairro você reside?"/>
                                    <Input  id={'state'} label="Estado" name={'state'} placeholder="Em qual Estado?"/>
                                    <Input  id={'complement'} label="Complemento" name={'complement'} placeholder="complementos"/>
                                </div>
                            </div>
                        </fieldset>
                        

                        <fieldset className="">
                            <legend className="text-orange-500 font-medium">Informações do responsavel</legend>
                            <div className="flex flex-col gap-5 mt-6 px-3">
                                <div className="flex flex-col md:flex-row gap-5">
                                    <Input  id={'guardian'} label="Nome completo do Responsavel" name={'guardian'} placeholder="Informe seu nome completo"/>
                                    <div className="w-full md:max-w-[30%]">
                                        <Input  id={'kindred'} label="Grau de parentesco" name={'kindred'} placeholder="Qual seu parentesco com o aluno"/>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row gap-5">
                                    <Input  id={'CPF'} label="CPF" name={'CPF'} placeholder="Informe seu CPF"/>
                                    <Input  id={'RG'} label="RG" name={'RG'} placeholder="Informe seu RG"/>
                                </div>
                                <div className="flex flex-col md:flex-row gap-5">
                                    <Input  id={'guardianGender'} label="Data de nascimento" name={'guardianGender'} placeholder="dd/mm/aaaa"/>
                                    <Input  id={'telephone'} label="Tel./celular" name={'telephone'} placeholder="(00)00000-0000"/>
                                </div>

                                <Input  id={'fetch'} label="Quam vai levar e trazer" name={'fetch'} placeholder="Informe quem vão ser as pessoas que irão levar e trazer o aluno"/>
                            </div>
                        </fieldset>
                       
                    </form>

                    {/*  
                        cursos
                        horario
                        nome do aluno
                        data de nascimento
                        genero
                        tipo sanguineo 
                        peso
                        alergia
                        alergia a que
                        como tratar?
                        informações relevantes
                        cep
                        bairro
                        estado
                        rua
                        complemento
                        nome da mae
                        identidade rg e cpf
                        data de nasc.
                        celular
                        quem vira buscar o aluno
                        qual parentesco
                        celular
                    */}
                </Section>
            </main>
            <Footer/>
        </div>
    )
}