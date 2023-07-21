import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { v4 as uuidv4 } from 'uuid';

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [id, setId] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const aoSalvar = (evento)=> {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
            id
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
        setId(uuidv4())
        console.log(id)
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Campo
                    type='text' 
                    obrigatorio={true} 
                    label='Nome' 
                    placeholder="Digite o seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo
                    type='text' 
                    obrigatorio={true} 
                    label='Cargo' 
                    placeholder="Digite o seu cargo"
                    valor={cargo}
                    aoAlterado={cargo => setCargo(cargo)}
                />
                <Campo
                    type='text' 
                    label='Imagem' 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={imagem => setImagem(imagem)}
                />
                <ListaSuspensa
                    type='text' 
                    obrigatorio={true} 
                    label='Time' 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault()
                props.cadastrarTime({nome: nomeTime, cor: corTime})
            }}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo
                    type='text' 
                    obrigatorio
                    label='Nome' 
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <Campo
                    type='color' 
                    obrigatorio 
                    label='Cor' 
                    placeholder="Digite a cor do time"
                    valor={corTime}
                    aoAlterado={cargo => setCorTime(cargo)}
                />
                <Botao>
                    Criar time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario