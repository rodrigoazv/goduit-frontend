import React from 'react';

import { Container } from './styles';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <Container>
        <header>
            <img src={Logo} alt=""/>
            <form>
                <input type="text" placeholder="O que você está procurando?"name="" id=""/>
            </form>
            <Link to="/">Postar projetos</Link>
            <button className="button">Ver projetos</button>
        </header>
    </Container>
  );
}
