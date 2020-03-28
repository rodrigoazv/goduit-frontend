import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

import { Container } from './styles';
import Logo from '../../assets/logo.svg';

export default function Register() {
  return (
    <Container>
        <div className="content">
            <section>
                <img src={Logo} alt="logomarca"/>
                <h1> Cadastre-se </h1>
                <p>Faça seu cadastro e ajude pessoas a criarem sem sair de casa</p>
                <Link className="Back-link"to='/login'>
                    <FiLogIn color="green"></FiLogIn>
                        Já tenho cadastro
                </Link>
            </section>
            <form action="">
                <input placeholder="Seu nome"/>
                <input placeholder="Seu nome"/>
                <input placeholder="Seu nome"/>
                <input placeholder="Seu nome"/>
                <button className="button">Registrar</button>
        </form>
        </div>
        
    </Container>
  );
}
