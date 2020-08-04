import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import ButtonIntern from '../../../components/ButtonIntern';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  useEffect(() => {
    console.log('oi');
    const url = 'http://localhost:3001/categorias';
    fetch(url).then(async (responding) => {
      const resposta = await responding.json();
      setCategorias([...resposta]);
    });
    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'Front End',
    //       descricao:
    //         'Uma categoria para aprender sobre como criar uma interface maneira!',
    //       cor: '#e84118',
    //     },
    //     {
    //       id: 2,
    //       nome: 'Back End',
    //       descricao:
    //         'Uma categoria para aprender sobre como manipular seus dados corretamente, fazendo um banco mara para deixar seu Front End dinâmico!',
    //       cor: '#ffa502',
    //     },
    //     {
    //       id: 3,
    //       nome: 'Data Science e AI',
    //       descricao:
    //         'Uma categoria para aprender mais sobre a ciência e análise de dados!',
    //       cor: ' #05c46b',
    //     },
    //     {
    //       id: 4,
    //       nome: 'Full Stack',
    //       descricao:
    //         'Não sabe qual seu amor maior? Front End? Back End? Veja aqui o que um Dev Full Stack faz!',
    //       cor: '#1289A7',
    //     },
    //     {
    //       id: 5,
    //       nome: 'Game Dev',
    //       descricao:
    //         'Não sabe qual seu amor maior? Front End? Back End? Veja aqui o que um Dev Full Stack faz!',
    //       cor: '#EA2027',
    //     },
    //     {
    //       id: 6,
    //       nome: 'Discord',
    //       descricao: 'Quem aí não ama a comunidade? Bora lá pro server, dev!',
    //       cor: '#706fd3',
    //     },
    //     {
    //       id: 7,
    //       nome: 'Minhas Redes',
    //       descricao:
    //         'Quer conhecer mais sobre quem desenvolveu isso tudo aqui, na imersão React da Alura? Dá um pulo nas minhas redes, poxa!',
    //       cor: ' #55E6C1',
    //     },
    //   ]);
    // }, 4 * 1000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([...categorias, values]);

          setValues(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <ButtonIntern>Cadastrar</ButtonIntern>
      </form>

      {categorias.length === 0 && <div>Loading...</div>}

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>{categoria.nome}</li>
        ))}
      </ul>

      <Link to="/">
        <ButtonIntern as={Link} to="/">
          Home
        </ButtonIntern>
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
