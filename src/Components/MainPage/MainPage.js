import React from 'react'
import useForm from '../../hooks/useForms'
import { MainContainer, Form, Input } from './styles'

function MainPage() {

  const [formulario, onChangeAll, clean] = useForm({nome: "", modulos: "", tecnologias: "", responsavel: ""})

  const handleClick = (e) => {
    e.preventDefault()
    clean()
    
    console.log(`nome: ${formulario.nome}, numero de modulos: ${formulario.modulos}, tecnologias: ${formulario.tecnologias}, responsável: ${formulario.responsavel}`);
  }
 
  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome do Curso:</label>
        <Input 
          name='nome'
          id="nome"
          value={formulario.nome}
          onChange={onChangeAll}
          required
        />

        <label htmlFor="modulos">Número de Módulos: </label>
        <Input 
          type={"number"}
          name='modulos'
          id="modulos"
          value={formulario.modulos}
          onChange={onChangeAll}
          pattern="um{2,}"
          required
        />

        <label htmlFor="tecnologias">Tecnologias abordadas: </label>
        <Input 
          name='tecnologias'
          id="tecnologias"
          value={formulario.tecnologias}
          onChange={onChangeAll}
          required
        />
        
        <label htmlFor="responsavel">Responsável: </label>
        <Input 
          name='responsavel'
          id="responsavel"
          value={formulario.responsavel}
          onChange={onChangeAll}
          // pattern="a{5,}?"
          required
        />
      <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage