import React from 'react';
import { FiLogIn } from 'react-icons/fi'

import { Container } from './styles';

import Create from '../../assets/create.png';
import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <Container>
        <section className="form">
          <img src={Logo} alt="logomarca"/>
          <form action="">
            <h1>Faça seu login</h1>
            <input placeholder="Sua ID"/>
            <button type="submit" className="button">Entrar</button>

            <Link to="/register">
              <FiLogIn color="green"></FiLogIn>
              Não tenho cadastro
            </Link>
          </form>
        </section>
        <img src={Create} alt="create"/>
    </Container>
  );
}
