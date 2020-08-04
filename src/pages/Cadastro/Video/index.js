import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import ButtonIntern from '../../../components/ButtonIntern';
function CadastroVideo() {
  return (
    <PageDefault>
      <h1> Cadastro de Vídeo </h1>
      <ButtonIntern as={Link} to="/cadastro/categoria">
        Cadastrar Categoria
      </ButtonIntern>
    </PageDefault>
  );
}
export default CadastroVideo;
