import { useState } from "react";
import Botao from "../Botao/Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import "./Formulario.css";

function Formulario(props) {
  // const times = [
  //   "Programação",
  //   "Front-End",
  //   "Data-Science",
  //   "Devops",
  //   "UX e Design",
  //   "Mobile",
  //   "Inovação e Gestão",
  // ];

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setCargo('')
  };

  

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Prencha os dados para criar os dados do Colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu e-mail"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          placeholder="Digite aqui o endereço da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa 
        obrigatorio={true}
          label="Time" 
          itens={props.times}
          valor={time}
          aoAlterado={valor => setTime(valor)} />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
}

export default Formulario;
