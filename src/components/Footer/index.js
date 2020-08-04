import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.linkedin.com/in/carolina-de-abreu-fernandes-287905181/">
        <img
          src="https://fontmeme.com/permalink/200729/1cbad31c4c9ba514c2cf8b02d6c77bee.png"
          alt="Assinatura do site"
        />
      </a>
      <p>
        Orgulhosamente criado durante a{' '}
        <a href="https://www.alura.com.br/">Imersão React da Alura</a>
      </p>
    </FooterBase>
  );
}

export default Footer;
